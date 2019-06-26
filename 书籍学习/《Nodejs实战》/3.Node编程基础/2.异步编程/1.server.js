let http = require('http');
let fs = require('fs');


let handle500 = (res) => {
    res.writeHead(500, "server error");
    res.end();
}

let server = http.createServer();

server.listen(8100, () => {
    console.log("server is running.");
});

server.on("request", (req, res) => {
    fs.readFile('./1.title.json', (err, content) => {
        if(err){
            return handle500(res);
        }
        content = content.toString();
        let titles = JSON.parse(content).data;

        fs.readFile("./1.home.html", (err, content) => {
            if(err){
                return handle500(res);
            }
            content = content.toString();
            let html = content.replace(/%/, titles.reduce((total, item) => total + "</li><li>" + item));

            res.writeHead(200, "ok");
            res.end(html);
        })
    })
})