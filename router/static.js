const Router = require('koa-router')
const koaStatic = require('koa-static')
const path = require('path')

const static = new Router()

static.get('/', koaStatic(path.join(__dirname, '../static')))

module.exports = static
