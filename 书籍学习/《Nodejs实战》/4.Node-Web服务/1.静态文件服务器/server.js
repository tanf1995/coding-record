let http = require('http');
let parse = require('url').parse;
let join = require('path').join;
let fs = require('fs');

let root = __dirname;


let server = http.createServer();

server.listen(3000, () => {
    console.log("server is running.");
})

server.on("request", (req, res) => { 
    req.url = parse(req.url);
    let path = join(root, req.url.pathname);
    
    // let stream = fs.createReadStream(path);

    // stream.on("error", (err) => {
    //     res.writeHead(404, "not found");
    //     res.end();
    // })

    // res.writeHead(200, {"Content-Type": "text/html"});
    // stream.pipe(res);

    fs.stat(path, (err, stat) => {
        if(err){
            res.writeHead(404, "not found");
            res.end();
            return;
        }

        res.writeHead(200, {"Content-Type": "text/html"});
        console.log(stat);
        res.end(stat.toString());
    })
})