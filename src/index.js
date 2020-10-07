const router = require('./router')
serve   = require('koa-static');

const Koa = require('koa')
const app = new Koa()

app
  .use(serve(__dirname + '/public'))
  .use(router.routes())
  .use(router.allowedMethods())


app.listen(3000)

