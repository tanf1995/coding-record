require('http').createServer(function(req, res){
    res.writeHead(200);
    res.end('hello world.');
}).listen(3000);