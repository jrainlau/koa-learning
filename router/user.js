const Router = require('koa-router')
const UserController = require('../controller/user.js')
const jwt = require('../middleware/jwt.js')

const user = new Router()

user
  .get('/', jwt, UserController.all)
  .get('/captcha', UserController.captcha)
  .post('/signup', UserController.signup)
  .post('/login', UserController.login)

module.exports = user