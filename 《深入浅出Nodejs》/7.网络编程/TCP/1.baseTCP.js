let net = require("net");

let server = net.createServer(  socket => {
    socket.on("data", data => {
        // socket.write("hello");
        console.log(data + data.toString());
    })

    socket.on("end", () => {
        console.log("disconnected");
    })
    socket.write("welcocme to this example for the book!\n")
})

server.listen(8120, () =>{
    console.log("server build!");
})