const Router = require('koa-router')

const cookie = new Router()

cookie.get('/', async (ctx) => {
  ctx.cookies.set(
    'my-cookie',
    'Aloha',
    {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/cookie',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )

  ctx.body = 'cookie is ok'
})

module.exports = cookie
