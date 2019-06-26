let http = require("http");
let url = require("url");


// Model
const Web = function(path){
    this.path = path;
}

// View
let drawingPath1 = (req, res) => {
    let w = handlePath1(req.url.pathname);
    res.writeHead(200, "ok");
    res.end("path of current page is " + w.path);
}

let drawingPath2 = (req, res) => {
    let w = handlePath2(req.url.pathname);
    res.writeHead(200, "ok");
    res.end("path of current page is " + w.path);
}

let drawingOther = (req, res) => {
    let w = handleOther(req.url.pathname);
    res.writeHead(200, "ok");
    res.end("path of current page is other");
}

// Control
let handlePath1 = (pathname) => {
    return new Web(pathname);
}

let handlePath2 = (pathname) => {
    return new Web(pathname);
}

let handleOther = (pathname) => {
    return new Web(pathname);
}


http.createServer((req, res) => {
    let pathname =  url.parse(req.url).pathname;

    req.url = url.parse(req.url);

    // 路由解析
    if(pathname.includes("/path1")){
        drawingPath1(req, res);
    }else if(pathname.includes("/path2")){
        drawingPath2(req, res);
    }else{
        drawingOther(req, res);
    }
}).listen(8000);