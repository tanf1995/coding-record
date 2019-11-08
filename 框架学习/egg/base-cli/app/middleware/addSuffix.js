module.exports = (options) => {
  return async function addSuffixMiddleware (ctx, next) {
    await next()
    console.log(options)
    ctx.body += '<br><p>-- tf</p>'
  }
}