const connect = require('connect');
const bodyParser = require('body-parser');

connect()
    .use(function(req, res, next){
        console.log(req.body);
        next();
    })
    .use(bodyParser.urlencoded({}))
    .use(function(req, res){
        console.log(req.body);
        res.end('ok')
    })
    .listen(3000);