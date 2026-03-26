const express = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const router = express.Router()

router.post('/register', async (req, res) => {
  try {
    const { name, surname, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      name,
      surname,
      email,
      password: hashedPassword
    })

    await user.save()

    res.status(201).json({ message: 'Usuario creado' })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router