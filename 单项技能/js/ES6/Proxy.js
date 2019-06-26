function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(this.name);
}

var proxy_handler = {
    get(target, name){
        console.log("get property " + name);
        return target[name];
    },
    getPrototypeOf(target){
        console.log("get prototype by getPrototypeOf");
        return target;
    },
    setPrototypeOf(target, property){
        console.log("set prototype by setPrototypeOf");
        return true;
    }
}

var p = new Proxy((new Person('tf')), proxy_handler);

p.sayName();
console.log(Object.getPrototypeOf(p));
console.log(Person.prototype);
Object.setPrototypeOf(p, {});
console.log(Object.getPrototypeOf(p));