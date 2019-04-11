let http = require("http");
let url = require("url");


// middleware
let recordLog = (req, res, next) => {

    function formatDate(time){
        var date = new Date(time);
    
        var year = date.getFullYear(),
            month = date.getMonth() + 1,//月份是从0开始的
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        var newTime = year + '-' +
                    month + '-' +
                    day + ' ' +
                    hour + ':' +
                    min + ':' +
                    sec;
        return newTime;         
    }

    console.log(`${formatDate((new Date).getTime())} : visited path ${req.url.pathname}`);
    next();
}


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
    use: function(path){
        let handle;

        if(typeof arguments[0] === "string"){
            handle = { 
                path: path,
                stack: Array.prototype.slice.call(arguments, 1)
            }
            this.routes.all.push(handle);
        }else{
            handle = { 
                path: "/",
                stack: Array.prototype.slice.call(arguments, 0)
            }
            this.routes.all.push(handle);
        }
    },
    handle: (req, res, stack) => {
        let next = () => {
            let middleware = stack.shift();
            if(middleware){
                middleware(req, res, next);
            }
        };

        next();
    },
    match: (pathname, routes) => {
        let stacks = [];
        routes.forEach(route => {
            if(pathname.includes(route.path)){
                stacks = stacks.concat(route.stack);
            }
        })
        return stacks;
    }
}

new Array("get", "put", "delete", "post").map(method => {
    app.routes[method] = [];
    app[method] = function(path){
        let handle;

        if(typeof arguments[0] === "string"){
            handle = { 
                path: path,
                stack: Array.prototype.slice.call(arguments, 1)
            }
            this.routes.get.push(handle);
        }else{
            handle = { 
                path: "/",
                stack: Array.prototype.slice.call(arguments, 0)
            }
            this.routes.get.push(handle);
        }
    }
})

// push routes
app.get(recordLog);
// app.use(recordLog);
app.use("/login", handleLogin);
app.get("/books", handleBooks('get'));



http.createServer((req, res) => {
    req.url = url.parse(req.url);
    
    if(req.method === "GET"){
        let stacks = app.match(req.url.pathname, app.routes.get);

        if(stacks.length){
            app.handle(req, res, stacks);
        }
    }

    let stacks = app.match(req.url.pathname, app.routes.all);

    if(stacks.length){
        app.handle(req, res, stacks);
    }

    handle404(req, res);
}).listen(8000);