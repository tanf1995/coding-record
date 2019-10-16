const http = require('http')
const url = require('url')
const crypto = require('crypto')

// tool
const parseUrlQuery = (queryStr) => {
  if (!queryStr) return null

  let list = queryStr.split('&')
  let query = {}

  list.forEach(item => {
    let list = item.split('=')

    query[list[0]] = list[1]
  })
  return query
}

// url control
const handleHome = (req, res) => {
  if (req.query) {
    try {
      let { signature, echostr, timestamp, nonce } = req.query
      const token = 'tanfeng'
      const sha1 = crypto.createHash('sha1')
      let list = [token, timestamp, nonce]

      list.sort()
      list.forEach(item => {
        sha1.update(item)
      })

      if (sha1.digest('hex') === signature) {
        return res.end(echostr)
      }
    } catch(err) {}
  }
  res.end('this is Home Page!')
}

http.createServer((req, res) => {
  res.writeHead(200, {})
  let urlObject = url.parse(req.url)
  let body = ''
  
  req.on('data', data => {
    body += data
  })

  req.on('end', () => {
    console.log(body)
  })

  if (urlObject.pathname === '/') {
    req.query = parseUrlQuery(urlObject.query)
    handleHome(req, res)
  } else {
    res.end('hello world!')
  }
}).listen(3000)