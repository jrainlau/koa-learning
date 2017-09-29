const Router = require('koa-router')

const get_params = new Router()

get_params.get('/', async (ctx) => {
  const html = {
    url: ctx.url,
    req_query: ctx.request.query,
    req_queryString: ctx.request.querystring,
    ctx_query: ctx.query,
    ctx_queryString: ctx.querystring
  }
  ctx.body = html
})

module.exports = get_params
