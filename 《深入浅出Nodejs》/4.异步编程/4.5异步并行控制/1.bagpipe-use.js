let Bagpipe = require("bagpipe");
let fs = require("fs");


var bagpipe = new Bagpipe(1);
console.log(bagpipe);

var files = ["file1.txt", "file2.txt", "file3.txt"];
for (var i = 0; i < files.length; i++) {
  bagpipe.push(fs.readFile, files[i], 'utf-8', function (err, data) {
    if(err){
        console.log(err);
        return;
    }
    setTimeout(function(){
        console.log(data);
    }, 1000)
  });
  console.log(bagpipe.queue);
}


bagpipe.on("full", function(length){
    console.log("full, now task length is " + length);
})