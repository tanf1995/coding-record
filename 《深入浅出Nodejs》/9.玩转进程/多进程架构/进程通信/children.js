let http = require("http");

process.on("message", (msg) => {
    console.log("children receive msg from parent, and content is :" + msg);
})

process.send("i am children, are you parent?");