let cp = require("child_process");
let net = require("net");

let child1 = cp.fork("./child.js");
let child2 = cp.fork("./child.js");


let server = net.createServer();

server.listen(8100, function(){
    child1.send('server1', server);
    child2.send('server2', server);

    server.close();
})

process.on("close", function(){
    console.log("close", arguments);
})

process.on("exit", function(){
    console.log("exit", arguments);
})