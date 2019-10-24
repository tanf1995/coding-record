module.exports = app => {
  app.once('server', server => {
    console.clear()
    console.log('server start in ' + app.config.env)
  })

  app.on('request', ctx => {
    console.log(`${new Date()} ${ctx.url} ${ctx.method}`)
  })

  app.on('response', ctx => {
    console.log(`response time: ${Date.now() - ctx.starttime}ms`)
  })
}