let computed = require('./lib/computed');
let Computed2 = require('./lib/computed2');

console.log("hello");
console.log(computed.add(1, 2, 3));
console.log(computed.div(4, 3));


console.log("===============");
let computed2 = new Computed2();
console.log(computed2.add(2, 3, 5));
console.log(computed2.div(9, 3));