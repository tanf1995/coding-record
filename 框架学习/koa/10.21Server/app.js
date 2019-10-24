const Koa = require('koa')
const app = new Koa()


// tools
Date.prototype.format = function (formatStr) {
  let o = {
    'y+': this.getFullYear(),
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours() >= 12 ? this.getHours() - 12 : this.getHours(),
    'H+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'S': this.getMilliseconds()
  }

  for (let key in o) {
    let replaceValue = o[key]
    let notPadStart = ['y+', 'S']

    if (!notPadStart.includes(key)) {
      replaceValue = replaceValue.toString().padStart(2, '0')
    }

    formatStr = formatStr.replace(new RegExp(key, 'g'), replaceValue)
  }
  return formatStr
}

// midderwares
// log
app.use(async (ctx, next) => {
  let currentDate = new Date()
  let currentTime = (currentDate).format('yyyy-MM-d HH:mm:ss')
  let printContent = `${currentTime} ${ctx.request.method} ${ctx.request.url}`
  await next()
  let timeGap = ((new Date()).getTime() - currentDate.getTime())/1000

  printContent += ` ${timeGap}s`
  console.log(printContent)
})

app.use(async (ctx, next) => {
  ctx.body = '<h2>1. hello world</h2>'
  await next()
})

app.use(async ctx => {
  ctx.body += '<div>2. bom!</div>'
})

app.listen(3000, () => {
  console.clear()
})
