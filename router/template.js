const Router = require('koa-router')

const template = new Router()

template.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Aloha Koa2!!!'
  })
})

module.exports = template
