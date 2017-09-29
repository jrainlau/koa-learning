const Router = require('koa-router')
const jwt = require('jsonwebtoken')

const auth = new Router()

auth.post('/', (ctx) => {
  if (ctx.request.body.password === 'admin123' && ctx.request.body.account === 'admin') {
    ctx.status = 200
    ctx.body = {
      token: jwt.sign({
        role: 'admin'
      }, 'YourKey'),
      message: 'Successful Authentication'
    }
  } else {
    ctx.status = 401
    ctx.body = {
      message: 'Authentication Failed'
    }
  }
  return ctx
})

module.exports = auth
