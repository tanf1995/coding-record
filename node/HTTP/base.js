require('http').createServer(function(req, res){
    // var res_header = {
    //     'Content-Type': 'text/html'
    // }

    // res.writeHead(200, res_header);
    // res.write('Hello.')

    // setTimeout(function(){
    //     res.end('<b>world</b>');
    // }, 1000)
    console.log(req.headers);

    var res_header = {
        'Content-Type': 'image/*'
    }
    require('fs').createReadStream('timg.jpg').pipe(res);
}).listen(3000);