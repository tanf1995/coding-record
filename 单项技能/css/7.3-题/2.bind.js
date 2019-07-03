Function.prototype._bind = function(that){
    const args = Array.prototype.slice.call(arguments, 1)

    this.apply(that, args);
}

function sayName(label){
    console.log(label + this.name);
}


let o1 = {
    name: "zs"
}

sayName._bind(o1, "name: ");