function Big(){
    var o = new Object();

    o.name = "tf";
    o.sayHi = function(){
        console.log("hi");
    }

    return o;
}

function OtherBig(){
    var o = new Object();
    o.hobby = ["ball", "game"];
    return o;
}

function Small(){
    var o1 = new Big();
    var o2 = new OtherBig();
    var o = Object.assign({}, o1, o2);

    o.age = 22;
    return o;
}

var b = Big();
var s = Small();

s.sayHi()
b.sayHi()

s.sayHi = function(){
    console.log("hello");
}

s.sayHi();
b.sayHi();
console.log(s.hobby);