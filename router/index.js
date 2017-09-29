const Router = require('koa-router')

const router = new Router()

;[
  '/',
  '/page',
  '/get_params',
  '/post_body',
  '/cookie',
  '/template',
  '/user',
  '/auth'
].forEach((route) => {
  const routeInstance = route === '/' ? require('./home.js') : require(`.${route}.js`)
  router.use(route, routeInstance.routes(), routeInstance.allowedMethods())
})

module.exports = router
