const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true},
  surname: {type: String, required: true},
  email:  { type: String, required: true },
  password: { type: String, required: true },
  currentLevel: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model('Client', clientSchema)