var person = {
    _name: "tf",
    _age: 22
}

Object.defineProperties(person, {
    "name": {
        get: function(){
            return this._name;
        },
        set: function(val){
            this._name = val;
        }
    }
})


console.log(person.name);  
person.name = "ss";
console.log(person.name);