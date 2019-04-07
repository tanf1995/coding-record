let dgram = require("dgram");

let msg = new Buffer("深入浅出NodeJs", "utf-8");
let client = dgram.createSocket("udp4");

client.send(msg, 0, msg.length, 41234, "localhost", (err, bytes) => {
    client.close();
})