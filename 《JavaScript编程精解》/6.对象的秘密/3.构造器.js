function Person(name){
    this.name = name;
}

let p = new Person('tf');

console.log(Object.getPrototypeOf(p));
console.log(Object.getPrototypeOf(Person));

class Animal{
    constructor(type){
        this.type = type;
    };
    say(){
        console.log(`hello, i am a ${this.type}`);
    }
}

let c = new Animal('cat');
c.say();
console.log(Object.getPrototypeOf(c));
console.log(Object.getPrototypeOf(Animal));  // Function