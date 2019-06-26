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

let handleBooks = (method) => {
    if(method.toLowerCase() === 'get'){
        return (req, res) => {
            res.writeHead(200, "ok");
            res.end("books: 《三国演义》, 《倚天屠龙记》");
        }
    }
}

// app
let app = {
    routes: {
        all: []
    },
    use: function(path, action){
        this.routes.all.push([path, action]);
    }
}

new Array("get", "put", "delete", "post").map(method => {
    app.routes[method] = [];
    app[method] = (path, action) => {
        app.routes[method].push([path, action]);
    }
})

// push routes
app.use("/login", handleLogin);
app.get("/books", handleBooks('get'));



http.createServer((req, res) => {
    req.url = url.parse(req.url);
    
    if(req.method === "GET"){
        app.routes.get.forEach(route => {
            if(req.url.pathname === route[0]){
                route[1](req, res);
                return;
            }
        })
    }

    app.routes.all.forEach(route => {
        if(req.url.pathname === route[0]){
            route[1](req, res);
            return;
        }
    })

    handle404(req, res);
}).listen(8000);