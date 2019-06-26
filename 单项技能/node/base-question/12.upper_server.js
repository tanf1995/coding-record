require('http').createServer(function(req, res){
    if(req.method === 'POST'){
        req.pipe(require('through2-map')(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
    }
}).listen(process.argv[2]);