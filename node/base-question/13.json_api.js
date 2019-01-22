require('http').createServer(function(req, res){
    var url = require('url').parse(req.url, true);

    if(url.pathname === '/api/parsetime'){
        var time = url.query["iso"];
        console.log(url);
        var date = new Date(time);
        res.end(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }))
    }else if(url.pathname === '/api/unixtime'){
        var time = url.query["iso"];
        var date = new Date(time);
        res.end(JSON.stringify({
            unixtime: date.getTime()
        }))
    }
}).listen(process.argv[2]);