class Animal{
    constructor(name){
        this.name = name;
    }
}

class Cat extends Animal{
    constructor(name, age){
        super(...arguments);
        this.age = age;
    }
    say(){
        console.log("hello i am " + this.name + " and my age is " + this.age);
    }
}

var c = new Cat("dm", 22);
c.say();
console.log(c instanceof Cat);
console.log(c instanceof Animal);
console.log(Object.getPrototypeOf(c));