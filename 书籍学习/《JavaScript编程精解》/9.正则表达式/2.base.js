let reg = /\d{2}/;

// console.log(reg.test("12"));
// console.log(reg.test("a123a"));  

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohooo"));
console.log(cartoonCrying.exec("Boohoooohoohooo"))
