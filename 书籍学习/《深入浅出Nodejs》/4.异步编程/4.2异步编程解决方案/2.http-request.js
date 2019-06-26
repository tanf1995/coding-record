let http = require("http");

const options = {
    host: "www.google3.com",
    port: 80,
    path: "/",
    method: "GET"
};

let req = http.request(options, function(res){
    console.log("STATUS: " + res.statusCode);
    console.log("HEADERS: " + JSON.stringify(res.headers));
    res.setEncoding("utf-8");
    res.on('data', function(chunk){
        console.log("BODY: " + chunk);
    })
    res.on('error', function(error){
        console.log("error: " + error);
    })
    res.on("end", function(){
        console.log("end request");
    })
})

req.write('data\n');
req.write('data\n');
req.end();