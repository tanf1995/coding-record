let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");


http.createServer((req, res) => {
    req.url = url.parse(req.url);

    res.sendFile = (filepath) => {
        fs.stat(filepath, (err, stat) => {
            let stream = fs.createReadStream(filepath);

            res.writeHeader(200, {
                "Content-Type": mime.getType(filepath),
                "Content-Length": stat.size,
                "Content-Disposition": "attachment; filename='downloaddFile.txt'"
            })
            stream.pipe(res);
        })
    }

    if(req.url.pathname === "/download"){
        res.sendFile("./hello.txt");
    }else{
        res.writeHeader(200, "ok");
        res.end("hello");
    }
}).listen(8000)