let http = require("http");
let url = require("url");


http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Set-Cookie": "name=tf;"
    })

    // 请求方法
    console.log(req.method);

    // url
    console.log(url.parse(req.url));
    console.log(url.parse(req.url, true).query)

    // cookies
    console.log(req.headers.cookie);

    res.end('hello world/n');
}).listen(8000);

console.log("server running");