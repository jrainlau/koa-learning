const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const userSchema = new Schema({
  account: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel
