const express = require("express");
const path = require("path");

const app = express();


app.get("/user/:id", (req, res) => {
    // http://localhost:3000/user/2  =>  {"id":"2"}
    res.send(req.params);
})

app.get("/article/:id.:title", (req, res) => {
    // 支持 "-"、 "."
    res.send(req.params);
})

// 路由处理器中间件
app.all(
    "/", 
    (req, res, next) => {
        console.log(req.method + " " + req.url);
        next();
    },
    (req, res) => {
        res.send("home page");
    }
)

// response methods
app.get("/download", (req, res) => {
    res.download(path.join(__dirname, "./404.png"));
})

app.get("/res_methods", (req, res) => {
    // res.json({name: "tf"});
    res.redirect("/");
})

app.listen(3000);