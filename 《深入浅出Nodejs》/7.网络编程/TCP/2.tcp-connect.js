let net = require("net");

let client = net.connect({port: 8120}, () => {
    console.log("client connect.");
    client.write("world\n");
})

client.on("data", data => {
    console.log(data.toString());
    client.end();
})

client.on("end", () => {
    console.log("client disconnected.");
})