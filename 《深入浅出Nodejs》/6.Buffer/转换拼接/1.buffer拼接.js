let fs = require("fs");

let rs = fs.createReadStream("./静夜思.txt", {highWaterMark: 1});
rs.setEncoding("utf8");   // 未设置乱码
let data = "";
rs.on("data", function(chunk){
    data += chunk;
})

rs.on("end", function(){
    console.log(data);
})