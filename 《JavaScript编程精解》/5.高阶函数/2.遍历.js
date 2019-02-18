var li = ["t", "a", "n"];
var o = {
    name: "tf",
    age: 23
}

for(let i in o){
    console.log(i);
}
for(let i in li){
    console.log(i);
}
for(let i of li){
    console.log(i);
}

var l = [1, 1, 2, 3, 5];
console.log(l.reduce((a, b) => a+b));