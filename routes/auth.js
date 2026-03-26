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
  res.json({ message: `Hola${req.client.name} ya estas autenticado` })
}

module.exports = router