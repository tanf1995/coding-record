let http = require("http");
let url = require("url");


// control
let handle404 = (req, res) => {
    res.writeHead(404, "not found");
    res.end("not found");
}

let handleLogin = (req, res) => {
    res.writeHead(200, "ok");
    res.end("login success.");
}


http.createServer((req, res) => {
    req.url = url.parse(req.url);

    app.routes.forEach(route => {
        if(req.url.pathname === route[0]){
            route[1](req, res);
            return;
        }
    })

    handle404(req, res);
}).listen(8000);


// app
let app = {
    routes: [],
    use: function(path, action){
        this.routes.push([path, action]);
    }
}

// push routes
app.use("/login", handleLogin);