let async =  require("async");
let fs = require("fs");


async.waterfall([
    function(cab){
        setTimeout(function(){
            console.log("read file1");
            fs.readFile("./file1.txt", "utf-8", function(err, data){
                cab(err, data);
            })
        }, 1000)
    },
    function(arg, cab){
        console.log("file1: " + arg);
        setTimeout(function(){
            console.log("read file2");
            fs.readFile("./file2.txt", "utf-8", function(err, data){
                cab(err, data);
            });
        }, 1000)
    }
], function(err, content){
    if(err){
        console.log(err);
        return;
    }

    console.log(content);
})