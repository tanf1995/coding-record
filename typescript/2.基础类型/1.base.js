// 定义
var isDone = false;
var count = 0;
var st = "hello";
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var tup;
if (isDone) {
    console.log("true");
}
else {
    console.log("false");
}
tup = ["yep", 10, 20];
console.log(tup[2].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
console.log(Color[c]);
console.log(Color);