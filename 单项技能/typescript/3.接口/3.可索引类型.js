var list = ["zs", "ls", "wmz"];
var p1 = list[0];
// let p2: number = list[1]; // error, must be string
// list[0] = "zsf" // error, readonly
list["0"] = "zsf";
console.log(list);
