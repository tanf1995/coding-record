let http = require("http");
let url = require("url");
let fs = require("fs");

let sessions = {};

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

            rel[li[0].trim()] = li[1];
        })
        req.cookie = rel;
        return rel;
    }
}

http.createServer((req, res) => {
    parse_cookie(req);
    let pathname = url.parse(req.url).pathname;

    if(pathname.includes("/login")){
        let id = "123456";
        let session = {
            name: "tf"
        }
        sessions[id] = session;

        res.writeHead(200, {
            "Set-Cookie": "key=" + id
        });
        res.end("login success.");
        return;
    }else if(pathname.includes("/save_msg")){
        let id = req.cookie["key"];

        console.log(sessions);
        console.log(req.cookie);
        console.log(id);
        if(id && sessions[id]){
            let session = sessions[id];
            let buffers = [];

            req.on("data", chunk => {
                buffers.push(chunk);
            })

            req.on("end", () => {
                req.rawBody = Buffer.concat(buffers).toString();

                res.writeHead(200);
                res.end("save message success.your name is " + session.name + ", content is " + req.rawBody);
            })
        }else{
            res.writeHead(400, "save failed!");
            res.end("save message failed.");
        }
    }else{
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        fs.readFile("./csrf-test.html", (err, content) => {
            res.write(content);
            res.end();
        })
    }
}).listen(8000)