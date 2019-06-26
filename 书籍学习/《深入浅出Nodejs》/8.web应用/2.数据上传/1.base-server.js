let http = require("http");
let url = require("url");


let hasBody = (req) => {
    return 'transfer-encoding' in req.headers || 'content-length' in req.headers;
}

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    })

    if(hasBody(req)){
        let buffers = [];

        req.on("data", (chunk) => {
            buffers.push(chunk);
        })

        req.on("end", () => {
            req.rawBody = Buffer.concat(buffers).toString();
            // console.log(JSON.parse(req.rawBody));
            console.log(req.headers);
            console.log(req.rawBody);
            res.write(req.rawBody);
            res.end();
        })
    }else{
        res.write("no body");
        res.end();
    }
}).listen(8000);

console.log("server running");