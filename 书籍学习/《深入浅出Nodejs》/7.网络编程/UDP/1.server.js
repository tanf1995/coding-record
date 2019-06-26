let dgram = require("dgram");
let socket =  dgram.createSocket("udp4");


socket.on("message", (msg, info) => {
    console.log("msg: " + msg);
    console.log("from: " + info.address + " - " + info.port);
})

socket.on("listening", () => {
    let address = socket.address();

    console.log("server listen from " + address.address + " - " + address.port);
})

socket.bind(41234);