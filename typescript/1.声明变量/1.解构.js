// 数组
var li = ["tf", 24];
var username = li[0], age = li[1];
console.log(username, age);
function showInfo(_a) {
    var username = _a[0], age = _a[1];
    console.log("username: " + username + ", age: " + age);
}
showInfo(li);
// 对象
var o = {
    pName: "xm",
    pAge: 22
};
var pName = o.pName, pAge = o.pAge;
console.log(pName, pAge);
