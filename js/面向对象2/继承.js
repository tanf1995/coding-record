function Person(name){
    this.name = name;
    this.sayHello = function(){
        console.log("hello");
    }
}

Person.prototype.sayName = function(){
    return this.name;
}

function Man(name){
    Person.apply(this);
    this.name = name;
}

Man.prototype.__proto__ = Person.prototype;
// Man.prototype = new Person("ss");


var p1 = new Man("tf");
p1.sayHello()
console.log(p1.sayName())