function identity(arg) {
    return arg;
}
var output = identity(23); // T => number
var output2 = identity("hello"); // T => string
console.log(output, output2);
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var p = new People();
p.selfValue = 10;
p.add = function (x, y) { return x + y; };
console.log(p.add(3, 3));
var p2 = new People();
p2.selfValue = "zs";
p2.add = function (x, y) { return x + y; };
console.log(p2.add("iron", "man"));
