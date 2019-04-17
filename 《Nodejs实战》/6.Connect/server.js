let connect = require("connect");
let url = require("url");


// middleware
function logger(req, res, next){
    let date = new Date();
    let format_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log(
        `${format_time}: ${req.method} ${req.parser_url.pathname}`
    );
    next();
}

function handle404(req, res){
    res.writeHead(404, "not found");
    res.end(req.method + " " + req.parser_url.pathname);
}

function commonSetting(req, res, next){
    // url
    req.parser_url = url.parse(req.url);

    // cookies
    let cookie = req.headers["cookie"] || "";
    let cookies = cookie? cookie.split(";") : [];
    let cookie_obj = {};

    cookies.forEach(cookie => {
        if(cookie && cookie.includes("=") && cookie.indexOf("=") !== 1 && cookie.indexOf("=") !== cookie.length-1){
            let key_value = cookie.replace(/\s/g, "").split("=");

            cookie_obj[key_value[0]] = key_value[1];
        }
    })
    req.cookie = cookie_obj;

    next();
}

function handleRequest(req, res, next){
    switch(req.parser_url.pathname){
        case "/":
            requestHome(req, res);
            break;

        case "/login":
            requestLogin(req, res);
            break;

        case "/logout":
            requestLogout(req, res);

        default:
            next();
    }
}

function handleAdminRequest(req, res, next){
    // root path: /admin
    let root_path = "/admin";
    let sub_path = req.parser_url.pathname.replace(root_path, "") || "/";

    if(!req.cookie["key"] || req.cookie["key"] !== "123456"){
        return next();
    }

    switch(sub_path){
        case "/":
            requestAdminHome(req, res);
            break;
        default:
            next();
    }
}


// controls
function requestHome(req, res){
    res.writeHead(200, "ok", {
        "Content-Type": "text/html"
    });
    res.end("<h1>Welcome to home!</h1>");
}

function requestLogin(req, res){
    let cookie_li = [];

    req.cookie.key = "123456;Max-Age=" + 60*60*24*30;
    for(let key in req.cookie){
        cookie_li.push(key + "=" + req.cookie[key]);
    }

    res.setHeader('Location', '/');
    res.setHeader('Set-Cookie', cookie_li);
    res.writeHead(302, "redirect")
    res.end();
}

function requestLogout(req, res){
    let cookie_li = [];

    req.cookie.key = req.cookie.key.split(";")[0] + ";Max-Age=" + 0;
    for(let key in req.cookie){
        cookie_li.push(key + "=" + req.cookie[key]);
    }

    res.writeHead(302, "redirect", {
        "Location": "/",
        'Set-Cookie': cookie_li
    })
    res.end();
}

function requestAdminHome(req, res){
    res.writeHead(200, "ok", {
        "Content-Type": "text/html"
    });
    res.end("<h1>Welcome to admin home!</h1>");
}


let app = connect();

app
    .use(commonSetting)
    .use(logger)
    .use("/admin", handleAdminRequest)
    .use(handleRequest)
    .use(handle404)
    .listen(3000)