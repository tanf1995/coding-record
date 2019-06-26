var person = {
    name: "xx",
    age: 22,
    get_name: function(){
        return this.name;
    }
}

person.get_name = function(){
    return "name: " + this.name;
}
console.log(person.get_name());

Object.defineProperties(person, {
    "get_name": {
        enumerable: false,
        writable: false
    }
})

for(var item in person){
    console.log(item);
}

person.get_name = function(){
    return this.name;
}
console.log(person.get_name());