const Koa = require('koa')
const path = require('path')
const logger = require('./middleware/logger')
const router = require('./router/index.js')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const views = require('koa-views')
const mongoose = require('mongoose')
const cors = require('koa2-cors')
const session = require('koa-session-minimal')

mongoose.connect('mongodb://localhost:27017/demo', {
  useMongoClient: true
}).then(() => {
  console.log('MongoDB 连接成功')
})
mongoose.connection.on('error', console.error)

const app = new Koa()

app
  // .use(cors({
  //   origin: '*'
  // }))
  .use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
  .use(session({
    key: 'captcha'
  }))
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(logger())
  .use(static(path.join(__dirname, './static')))

app.listen(3000, () => {
  console.log('Listening at port 3000');
})
