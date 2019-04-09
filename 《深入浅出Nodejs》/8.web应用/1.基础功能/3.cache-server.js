let http = require("http");
let fs = require("fs");
let url = require("url");


http.createServer((req, res) => {
    if(req.url.includes("/cache")){
        fs.stat("./file.txt", (err, stat) => {
            let lastModified = stat.mtime.toUTCString();

            if(lastModified === req.headers['if-modified-since']){
                res.writeHead(304, "not modified");
                res.end();
            }else{
                fs.readFile("./file.txt", (err, file) => {
                    let lastModified = stat.mtime.toUTCString();
                    res.setHeader("Last-Modified", lastModified);
                    res.writeHead(200, "OK");
                    res.end(file);
                })
            }
        })
    }else{
        res.write("normal");
        res.end();
    }
}).listen(8000);

console.log("server running");