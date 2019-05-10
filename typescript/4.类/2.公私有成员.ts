interface PersonInterface{
    sayHello: () => void
}

class Person{
    private className: string = "Person";
    protected country: string = "china";
    protected constructor(public name: string, public age?: number){}

    sayHello(){
        console.log(
            `Hello!I am ${this.name}`
        );
    }
}


class Man extends Person{
    private gender: string = 'male';
    constructor(name: string, age?: number){
        super(name, age);
    }
    showGender(){
        console.log("my gender is " + this.gender);
    }
    showCountry(){
        console.log("i am come from " + this.country);
    }
}

let p1 = new Man("Iron Man", 40);
let p2 = new Man("caption america");

p1.sayHello();
p2.sayHello();

p2.showGender();
p2.showCountry();