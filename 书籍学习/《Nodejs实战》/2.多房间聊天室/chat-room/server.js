let http = require('http');
let fs = require("fs");
let path = require("path");
let mime = require("mime");
let chatServer = require("./lib/chat_server");

let cache = {};

// handler
let send404 = response => {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

let sendFile = (res, filePath, fileContent) => {
    res.writeHead(200, {"Content-Type": mime.lookup(path.basename(filePath))});
    res.end(fileContent);
}

let serveStatic = (res, cache, absPath) => {
    // if(cache[absPath]){
    //     sendFile(res, absPath, cache[absPath]);
    // }else{
    //     fs.exists(absPath, exists => {
    //         if(exists){
    //             fs.readFile(absPath, (err, data) => {
    //                 if(err){
    //                     send404(res);
    //                 }else{
    //                     cache[absPath] =  data;
    //                     sendFile(res, absPath, data);
    //                 }
    //             })
    //         }else{
    //             send404(res);
    //         }
    //     })
    // }
    fs.exists(absPath, exists => {
        if(exists){
            fs.readFile(absPath, (err, data) => {
                if(err){
                    send404(res);
                }else{
                    // cache[absPath] =  data;
                    sendFile(res, absPath, data);
                }
            })
        }else{
            send404(res);
        }
    })
}


let server = http.createServer((req, res) => {
    let filePath = false;

    if(req.url === '/'){
        filePath = 'public/index.html';
    }else{
        filePath = 'public/' + req.url;
    }

    let absPath = './' + filePath;
    serveStatic(res, cache, absPath);
})

server.listen(3000, () => {
    console.log("server listening on port 3000.");
})
chatServer.listen(server);