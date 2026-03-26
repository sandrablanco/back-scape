const express = require('express')
const bcrypt = require('bcrypt')
const Client = require('../models/Client')

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

module.exports = router