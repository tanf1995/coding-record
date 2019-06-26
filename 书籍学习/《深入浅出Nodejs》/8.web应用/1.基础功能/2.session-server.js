let http = require("http");
let url = require("url");


// session db
let sessions = {};
let key = "session_id";
let EXPIRES = 1 * 10 * 1000;

let generate = () => {
    let session = {};

    session.id = (new Date()).getTime() + Math.random();
    session.cookie = {
        expire: (new Date()).getTime() + EXPIRES
    };
    sessions[session.id] = session;
    return session;
}

// parse cookie
let parse_cookie = (req) => {
    let cookie = req.headers.cookie;

    if(!cookie){
        req.cookie = {};
        return {};
    }else{
        let rel = {};
        let cookie_li = cookie.split(";");

        cookie_li.forEach(item => {
            let li = item.split("=");

            rel[li[0]] = li[1];
        })
        req.cookie = rel;
        return rel;
    }
}

// hack res.writeHead
let hack_writeHead =  (req, res) => {
    let _writeHead = res.writeHead;

    res.writeHead = function(){
        let cookies = req.cookie,
            cookie_text = "";

        cookies[key] = req.session.id;
        for(let key in cookies){
            cookie_text += key + "=" + cookies[key] + ";";
        }
        res.setHeader('Set-Cookie', cookie_text);
        return _writeHead.apply(this, arguments);
    }
}

http.createServer((req, res) => {
    parse_cookie(req);
    hack_writeHead(req, res);

    let id = req.cookie[key];

    if(!id){
        req.session = generate();
        res.write("欢迎第一次访问！");
    }else{
        let session = sessions[id];

        if(session){
            if(session.cookie.expire > (new Date().getTime())){
                session.expire = (new Date()).getTime() + EXPIRES;
                req.session = session;
                res.write("欢迎再次访问。")
            }else{
                delete sessions[id];
                req.session = generate();
                res.write("session过期。")
            }
        }else{
            req.session = generate();
            res.write("session丢失。");
        }
    }

    res.end();
}).listen(8000);

console.log("server running");