interface StringArray{
    readonly [index: number]: string,
    length: number
}

let list: StringArray = ["zs", "ls", "wmz"];
let p1: string = list[0];
// let p2: number = list[1]; // error, must be string
// list[0] = "zsf" // error, readonly
list["0"] = "zsf"; 

console.log(list);