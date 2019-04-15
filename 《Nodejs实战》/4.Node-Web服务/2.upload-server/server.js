let http = require("http");
let url = require("url");
let fs = require("fs");
let formidable = require("formidable");


let handle404 = res => {
    res.writeHead(404, "not found");
    res.end();
}

let isFormData = (req) => {
    let type = req.headers['content-type'] ||  "";
    return 0 == type.indexOf('multipart/form-data');
}

let server = http.createServer();

server.listen(3000);

server.on("request", (req, res) => {
    req.url = url.parse(req.url);

    if(req.url.pathname === "/"){
        fs.readFile('./home.html', (err, content) => {
            if(err){
                return handle404(res);
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        })
    }else if(req.url.pathname === "/upload"){
        if(!isFormData(req)){
            res.statusCode = 400;
            res.end('Bad Request: expecting multipart/form-data');
            return;
        }

        let form = new formidable.IncomingForm();

        form.on("field", (field, value) => {
            console.log(field, value);
        })

        form.on("file", (name, file) => {
            console.log(name, file);
        })

        form.on('end', () => {
            res.end('upload complete');
        })

        form.parse(req);
    }else{
        return handle404(res);
    }
})