var fs = require("fs");
var files = fs.readdirSync(process.cwd());
files.forEach(function(file){
    fs.watchFile(process.cwd() + '/' + file, function(){
        console.log(' - ' + file + ' changed!');
    });
})