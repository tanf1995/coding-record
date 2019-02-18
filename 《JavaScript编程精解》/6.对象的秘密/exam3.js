let hasOwnProperty_sym = Symbol("hasOwnProperty");
let map = {one: true, two: true, [hasOwnProperty_sym]: true};

console.log(map[hasOwnProperty_sym]);
console.log(map.hasOwnProperty("one"));