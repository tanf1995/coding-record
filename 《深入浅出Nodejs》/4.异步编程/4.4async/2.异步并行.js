let async = require("async");
let fs = require("fs");


async.parallel([
    function(cab){
        setTimeout(function(){
            console.log("read file1");
            fs.readFile("./file1.txt", "utf-8", cab);
        }, 2000)
    },
    function(cab){
        console.log("read file2");
        fs.readFile("./file2.txt", "utf-8", cab);
    }
], function(err, content){
    if(err){
        console.log(err);
        return;
    }

    console.log(content);
})