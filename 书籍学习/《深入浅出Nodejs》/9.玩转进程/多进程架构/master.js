let fork = require("child_process").fork;
let cpus = require("os").cpus();

console.log("cpu length is " + cpus.length);

for(var i=0;i<cpus.length;i++){
    fork('./work.js');
}