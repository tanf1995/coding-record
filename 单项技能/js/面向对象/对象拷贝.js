var obj1 = {
    name: "tf",
    hobby: ["sleep", "eat"],
    other: {
        food: ["ky", "hg"],
        book: "lwdsl"
    },
    sayName: function(){
        console.log(this.name);
    }
}

var obj2 = JSON.parse(JSON.stringify(obj1));  // 丢失函数
console.log(obj2);

var obj3 = {};
for(var item in obj1){
    obj3[item] = obj1[item];
}
console.log(obj3 === obj1);
console.log(obj3.sayName === obj1.sayName);

// console.log(obj1.sayName.toString());
var f = eval("function (){console.log('tt')}");
f();
