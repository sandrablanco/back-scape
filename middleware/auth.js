const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Client = require('../models/Client')
const router = express.Router()


const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ message: 'No token, acceso denegado' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.client = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' })
  }
}