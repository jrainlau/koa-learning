const User = require('../model/user')
const jwt = require('jsonwebtoken')
const ccap = require('ccap')

let captchaText = ''

class UserController {
  async all (ctx) {
    const usersList = await User.find({}, {
      '_id': false,
      '__v': false
    })
    ctx.body = usersList
  }

  captcha (ctx) {
    const captcha = ccap({
      generate () {
        return (Math.random() * 10000).toFixed(0)
      }
    })
    const captchaArr = captcha.get()
    ctx.type = 'image/png'
    ctx.body = captchaArr[1]
    captchaText = captchaArr[0]
  }

  async signup (ctx) {
    console.log(ctx.request.body, captchaText);
    if (ctx.request.body.captcha !== captchaText) {
      ctx.status = 422
      ctx.body = {
        message: '验证码错误'
      }
      return
    }
    try {
      const user = await (new User(ctx.request.body)).save()
      console.log(`注册成功！${user}`);
      ctx.body = user
    } catch (err) {
      ctx.throw(422)
    }
  }

  async login (ctx) {
    const user = await User.findOne({
      account: ctx.request.body.account, password: ctx.request.body.password
    })
    console.log(`Find a user: ${user}, captcha: ${captchaText}`)
    if (user) {
      ctx.status = 200
      ctx.body = {
        token: jwt.sign({
          role: 'admin'
        }, 'secret-key'),
        message: 'Successful Authentication'
      }
    } else {
      ctx.status = 401
      ctx.body = {
        message: 'Authentication Failed'
      }
    }
    return ctx
  }
}

module.exports = new UserController()
