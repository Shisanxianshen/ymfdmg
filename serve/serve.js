// serve
const koa = require('koa')
const cors = require('koa2-cors')
const app = new koa()

app.use(cors())
app.use(async(ctx,next)=>{
  await next()
  ctx.response.type = 'application/json'
  ctx.response.body = '这是我返回的一个值'
})
app.listen(3000)
console.log('serve run success')
