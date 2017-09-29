const Router = require('koa-router')

const page = new Router()

page
  .get('/404', async (ctx) => {
    ctx.body = '404 page!'
  })
  .get('/helloWorld', async (ctx) => {
    ctx.body = 'Hello World!'
  })
  .get('/users/:id', async (ctx) => {
    ctx.body = `User: ${ctx.params.id}`
  })

module.exports = page