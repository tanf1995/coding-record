let http = require("http");

let server = http.createServer((req, res) => {
    res.writeHead(200, "ok");
    res.end("handle by child, pid is " + process.pid + "\n");
})


process.on("message", (m, tcp) => {
    if(m.includes("server")){
        if(m[m.length-1] === "1"){
            console.log("server1 run")
            console.log("pid is " + process.pid);
            tcp.on("connection", socket => {
                server.emit('connection', socket);
            })
        }else{
            console.log("server2 close");
            console.log("pid is " + process.pid);
            // tcp.close();
            tcp.on("connection", socket => {
                server.emit('connection', socket);
            })
        }
    }
})