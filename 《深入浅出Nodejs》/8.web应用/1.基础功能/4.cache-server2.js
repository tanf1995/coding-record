let http = require("http");
let fs = require("fs");
let crypto = require("crypto");


let getHash = (str) => {
    let shasum = crypto.createHash('sha1');
    return shasum.update(str).digest('base64');
}

http.createServer((req, res) => {
    if(req.url.includes("/cache")){
        fs.readFile("./file.txt", (err, file) => {
            let hash = getHash(file);
            let noneMatch = req.headers['if-none-match'];

            console.log(hash, req.headers);
            if(hash === noneMatch){
                res.writeHead(304, "not modified");
                res.end();
            }else{
                res.setHeader("ETag", hash);
                res.writeHead(200, "OK");
                res.end(file);
            }
            
        })
    }else{
        res.write("normal");
        res.end();
    }
}).listen(8000);

console.log("server running");