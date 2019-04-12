let fork = require("child_process").fork;
let cpus = require("os").cpus();


let server = require("net").createServer();
server.listen(8100);

let workers = {};

let createWorker = () => {
    let worker = fork('./child.js');

    worker.on("exit", function(){
        console.log("Worker " + worker.pid + " exited.");
        delete workers[worker.pid];
    })

    worker.on("message", function(message){
        if(message.act === "suicide") createWorker();
    })

    worker.send("server", server);
    workers[worker.pid] = worker;
    console.log("create worker pid: " + worker.pid);
}


for(let i=0;i<cpus.length;i++){
    createWorker();
}

process.on('exit', function(){
    for(let pid in workers){
        workers[pid].kill();
    }
})