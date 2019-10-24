module.exports = () => {
  return async function addSuffixMiddleware (ctx, next) {
    await next()
    ctx.body += '<br><p>-- tf</p>'
  }
}