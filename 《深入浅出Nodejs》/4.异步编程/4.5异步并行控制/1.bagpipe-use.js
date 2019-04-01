let Bagpipe = require("bagpipe");
let fs = require("fs");


var bagpipe = new Bagpipe(2);

function asyncTask(i, time){
    setTimeout(function(){
        console.log("task" + i);
    }, time);
}

var tasks = [[1, 2000], [2, 1000], [3, 500]];
    for (var i = 0; i < tasks.length; i++) {
        bagpipe.push(asyncTask, ...tasks[i], function (err, data) {
            if(err){
                console.log(err);
                return;
            }
        });
        console.log(bagpipe);
    }


bagpipe.on("full", function(length){
    console.log("full, now task length is " + length);
})