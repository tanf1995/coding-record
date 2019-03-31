let async = require("async");
let fs = require("fs");


async.series([
    // 系统注入的回调函数
    function readFile1(cab){
        setTimeout(function(){
            console.log("read file1");
            fs.readFile("./file1.txt", "utf-8", cab);
        }, 2000);
    },
    function readFile1(cab){
        console.log("read file2");
        fs.readFile("./file2.txt", "utf-8", cab);
    }
], function(err, content){
    if(err){
        console.log(err);
        return;
    }

    // content => [file1, file2]
    console.log(content);
})