const Router = require('koa-router')

const home = new Router()

home.get('/', async (ctx) => {
  const html = `
  <ul>
    <li><a href="/page/helloWorld">/page/helloWorld</a></li>
    <li><a href="/page/404">/page/404</a></li>
    <li><a href="/page/users/1234">/page/users/1234</a></li>
    <li><a href="/get_params?a=1&b=2">/get_params?a=1&b=2</a></li>
    <li><a href="/post_body">/post_body</a></li>
    <li><a href="/cookie">/cookie</a></li>
    <li><a href="/template">/template</a></li>
    <li><a href="/signup">/signup</a></li>
  </ul>
  `
  ctx.body = html
})

module.exports = home
