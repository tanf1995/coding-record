// 数组
let li: [string, number] = ["tf", 24];
let [username, age] = li;

console.log(username, age);


function showInfo([username, age]: [string, number]){
    console.log(
        `username: ${username}, age: ${age}`
    )
}

showInfo(li);


// 对象
let o = {
    pName: "xm",
    pAge: 22
}

let { pName, pAge } = o;
console.log(pName, pAge);
