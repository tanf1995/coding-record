let async = require("async");
let fs = require("fs");

async.parallelLimit([
    function(cab){
        setTimeout(function(){
            console.log("task 1");
            fs.readFile("file1.txt", "utf-8", cab);
        }, 2000)
    },
    function(cab){
        setTimeout(function(){
            console.log("task 2");
            fs.readFile("file2.txt", "utf-8", cab);
        }, 1000)
    },
    function(cab){
        setTimeout(function(){
            console.log("task 3");
            fs.readFile("file3.txt", "utf-8", cab);
        }, 500)
    },
], 1, function(err, res){
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
})