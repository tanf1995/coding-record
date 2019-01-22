var stdout = process.stdout;

require('http').createServer(function(req, res){
    req.setEncoding('utf-8');
    if('/' == req.url){
        var res_header = {
            "Content-Type": 'text/html'
        }
    
        res.writeHead(200, res_header);
        require('fs').createReadStream('index.html').pipe(res);

    }else if('/url' == req.url && 'POST' == req.method){
        var res_header = {
            "Content-Type": "text/html"
        }

        var body = '';
        req.on('data', function(chunk){
            body += chunk;
        })
        req.on('end', function(){
            body = require('querystring').parse(body); 

            res.writeHead(200, res_header);
            res.end('your name is ' + body["name"]);
        })
    }
}).listen(3000);