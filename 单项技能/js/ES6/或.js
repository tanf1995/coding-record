function f1(){
    console.log("f1");
}

function f2(){
    console.log("f2");
}

false || (f1, f2);

var  li = [];

true || (li[0] = 1);
console.log(li);