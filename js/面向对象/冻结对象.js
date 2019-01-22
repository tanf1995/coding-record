var obj = {
    name: "obj",
    sayName: function(){
        return this.name;
    }
}

console.log(obj.sayName())

obj.sayName = function(){
    return "your name: " + this.name
}

console.log(obj.sayName())

Object.freeze(obj);

obj.sayName = function(){
    return this.name;
}

console.log(obj.sayName())