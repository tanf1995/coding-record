let http = require("http");

let server = http.createServer((req, res) => {
    if(Math.random() > 0.5){
        res.writeHead(500, "server error");
        res.end();
        throw "err"
    };
    res.writeHead(200, "ok");
    res.end("handle by child, pid is " + process.pid + "\n");
}).listen(8100)


process.on("message", (m, tcp) => {
    if(m.includes("server")){
        worker = tcp;
        worker.on("connection", socket => {
            server.emit('connection', socket);
        })
    }
})

process.on("uncaughtException", (err) => {
    // record log

    process.send({act: 'suicide'});

    worker.close(() => {
        process.exit(1);
    })

    setTimeout(() => {
        process.exit(1);
    }, 5000)
})