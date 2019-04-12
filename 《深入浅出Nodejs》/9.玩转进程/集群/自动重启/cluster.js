let cluster = require("cluster");

cluster.setupMaster({
    exec: "child.js"
})

let cpus = require("os").cpus();
for(let i = 0;i<cpus.length;i++){
    cluster.fork();
}