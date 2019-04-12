let cp = require("child_process");


let n = cp.fork("children.js")

n.on("message", (data) => {
    console.log("parent receive msg from children, and content is :" + data);
    console.log("parent will send a msg to children after 3 seconds.");

    setTimeout(() => {
        n.send("i am parent, hello boy.");
    }, 3000);
})
