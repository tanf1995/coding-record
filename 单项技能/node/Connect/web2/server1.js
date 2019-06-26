var connect = require('connect');

// var app = connect()
//     .use(function(req, res){
//         res.end('hello');
//     })

var app = connect()
    .use(function(req, res, next){
        console.log('not use cookie-parser');
        next();
    })
    .use(require('cookie-parser')())
    .use(function(req, res){
        res.write('use cookie-parser');
        console.log('use cookie-parser');
        // res.end(req.cookies);
        res.end(".")
    })

app.listen(3000);