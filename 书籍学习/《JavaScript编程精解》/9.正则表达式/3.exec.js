let match = /\d+/.exec("one wto 250");

console.log(match);
console.log(typeof match);
console.log(match.keys());

console.log("====second===");
let match2 = "hello i am tf my age is 23".match(/l(lo).*?(tf)/i);
console.log(match2);