const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth')
require('dotenv').config()

const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use('/auth', authRoutes)

// conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err))

// ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})