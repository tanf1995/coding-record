let http = require("http");


http.createServer((req, res) => {
    console.log(req.headers);

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("hello!");
    res.end();
}).listen(1337);

console.log("server running");