interface PersonInterface{
    sayHello: () => void
}

class Person{
    name: string;
    age: number;
    constructor(name: string, age?: number){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(
            `Hello!I am ${this.name}`
        );
    }
}


class Man extends Person{
    gender: string;
    constructor(name: string, age?: number){
        super(name, age);
        this.gender = "male";
    }
}

let p1 = new Man("Iron Man", 40);
let p2 = new Man("caption america");

p1.sayHello();
p2.sayHello();