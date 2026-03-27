const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Client = require('../models/Client')
const authMiddleware = require('../middleware/auth')


const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const client = new Client({
      name,
      surname,
      email,
      password: hashedPassword
    })

    await client.save()

    res.status(201).json({ message: 'Usuario creado' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.post('/login', async (req, res) => { 
    try {
        const { email, password } = req.body
        
        //bucsar usuario por mail
        const client = await Client.findOne({ email })
        if (!client) {
            return res.status(400).json({ message: 'Usuario no encontrado' })
        }

        // verificar contraseña
        const isMatch = await bcrypt.compare(password, client.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' })
        }

        // generar token cuando usuario se loguea correctamente
        const token = jwt.sign({ id: client._id, name:client.name, email: client.email}, process.env.JWT_SECRET, { expiresIn: '1h' })
      
        //devolver token al usuario
        res.json({message: 'Login exitoso', token })
    } catch (error) {
        res.status(500).json({ error: error.message })

    }
})

router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Hola ${req.client.name}, ya estás autenticado` })
})

router.post('/level', authMiddleware, async (req, res) => {
  try {
    const { newLevel } = req.body

    // buscar usuario en DB
    const client = await Client.findById(req.client.id)

    if (!client) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    // evitar retroceder nivel
    if (newLevel <= client.currentLevel) {
      return res.status(400).json({ message: 'No se puede retroceder el nivel' })
    }

    // actualizar nivel
    client.currentLevel = newLevel
    await client.save()

    res.json({
      message: `Has avanzado al nivel: ${newLevel}`,
      "tu nivel actual es": client.currentLevel
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
 //saber que usuario es y en que nivel esta y poder ir a ese nivel
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const client = await Client.findById(req.client.id).select('-password')

    if (!client) {
      return res.status(404).json({ message: 'Usuario no encontrado' })
    }

    res.json({
      name: client.name,
      email: client.email,
      currentLevel: client.currentLevel
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router