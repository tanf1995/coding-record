let reg1 = new RegExp("\\d");
let reg2 = /\w+/;
let reg3 = /\D/;

console.log(reg1.test("1"));
console.log(reg2.test(","))
console.log(reg3.test("受打击"))