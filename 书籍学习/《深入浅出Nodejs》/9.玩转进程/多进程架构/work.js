let http = require("http");

let port = Math.floor(Math.random()*1000) + 8000;

http.createServer((req, res) => {
    res.writeHead(200);
    res.end("hello");
}).listen(port)

console.log("server running in port:  " + port);