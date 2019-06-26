let connect = require("connect");
let cookieParser = require('cookie-parser');

let app = connect();

// middleware
function handleRequest(req, res, next){
    switch(req.url){
        case "/login":
            res.setHeader('Set-Cookie', "name=tf", {signed: true});
            res.writeHead(200, "ok");
            res.end("hello");
            break;

        default:
            console.log(req.cookies);
            console.log(req.signedCookies);
            res.writeHead(200, "ok");
            res.end("hello");
    }
}

app
    .use(cookieParser('hello good boy.'))
    .use(handleRequest)
    .listen(3000)