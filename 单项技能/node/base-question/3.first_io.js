let path = process.argv[2];

let fs = require('fs');

let data = fs.readFileSync(path);

let str = data.toString();

let lines = str.split('\n');

console.log(lines.length - 1);