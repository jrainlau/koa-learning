const Router = require('koa-router')
const userModel = require('../model/userModel.js')

const signup = new Router()

signup
  .get('/', async (ctx) => {
    await ctx.render('signup', {
      result: 'Waiting...'
    })
  })
  .post('/', (ctx) => {
    const newUser = [ctx.request.body]
    userModel.create(newUser, (err) => {
      if (err) console.log(err)
      console.log('添加成功');
      ctx.body = 'success'
    })
  })

module.exports = signup
