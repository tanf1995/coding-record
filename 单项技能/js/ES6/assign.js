let o1 = {
    name: "tf",
    hobby: ["basketball", "game"]
}

let o2 = {
    name: "jx",
    hobby: ["TV", "sing"],
    age: 23
}

let o = Object.assign(o1, o2);

console.log(o);
console.log(o.hobby === o2.hobby);