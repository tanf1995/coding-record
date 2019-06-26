let connect = require("connect");
let cookieParser = require('cookie-parser');


let cookie = {
    name: "tf"
}

let val = cookieParser.signedCookies({pwd: "123456"}, 'hello good boy.');
let val2 = cookieParser.JSONCookie("name='tf'");

console.log(val);
console.log(val2);