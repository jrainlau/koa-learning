const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/demo', {
  useMongoClient: true
})

db.then((cb) => {
  console.log('Mongodb 连接成功');
})

const userSchema = new mongoose.Schema({
  account: String,
  password: String
})

const userModel = mongoose.model('usersLib', userSchema)

module.exports = userModel