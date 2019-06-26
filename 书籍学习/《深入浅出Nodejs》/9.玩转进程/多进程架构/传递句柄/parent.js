let cp = require("child_process");
let net= require("net");


let child1 = cp.fork("./child.js");
let child2 = cp.fork("./child.js");
let child3 = cp.fork("./child.js");

let server = net.createServer();


server.on("connection", (socket) => {
    socket.end("handle by parent \n");
})

server.listen(8100, () => {
    child1.send('server', server);
    child3.send('server', server);
    child2.send('server', server);
})