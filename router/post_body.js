const Router = require('koa-router')

const post_body = new Router()

post_body
  .get('/', (ctx) => {
    const html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/post_body">
      <p>userName</p>
      <input name="userName" /><br/>
      <p>nickName</p>
      <input name="nickName" /><br/>
      <p>email</p>
      <input name="email" /><br/>
      <button type="submit">submit</button>
    </form>
    `
    ctx.body = html
  })
  .post('/', (ctx) => {
    const postData = ctx.request.body
    ctx.body = postData
  })

module.exports = post_body
