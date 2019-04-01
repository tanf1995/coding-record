let async = require("async");
let fs = require("fs");


let q = async.queue(function(file, cab){
    setTimeout(function(){
        fs.readFile(file, "utf-8", cab);
    }, 1000);
}, 2);

q.drain = function(){
    console.log("done");
}

fs.readdirSync(".").forEach(function(file){
    q.push(file, function(err, data){
        console.log(data);
    })
})