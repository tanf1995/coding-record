function Animal(){
    this.type = "animal";
}

Animal.prototype.say_hello = function(){
    console.log("hello, i am a animal, my name is " + this.name);
}

function Female(){
    this.gender = "female";
}

function FemaleCat(name){
    this.constructor = "FemaleCat";
    this.name = name;
    Animal.call(this);
    Female.call(this);
}

FemaleCat.prototype = new Animal();


var c1 = new FemaleCat("zs");
var c2 = new FemaleCat("ls");

console.log(c1.name);
console.log(c1.gender);
c1.say_hello();

console.log(c2.name);
console.log(c2.gender);
c2.say_hello();

console.log(c1.say_hello === c2.say_hello);
console.log(c1.constructor);