let https = require('https');
let fs = require("fs");

let options = {
    keye: fs.readFileSync('./ssh/privatekey.pem'),
    cert: fs.readFileSync('./ssh/certificate.pem')
}

https.createServer(options, (req, res) => {
    res.writeHead(200, "ok");
    res.end("hello world\n");
}).listen(3000);