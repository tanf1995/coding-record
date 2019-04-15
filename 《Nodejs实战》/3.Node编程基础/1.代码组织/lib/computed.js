let add = function(){
    return Array.prototype.reduce.call(arguments, (item, last) => {
        return item + last;
    })
}

let div = function(num1, num2){
    return num1 / num2;
}

exports.add = add;
exports.div = div;