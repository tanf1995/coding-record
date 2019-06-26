function Computed(){}

Computed.prototype.add = function(){
    return Array.prototype.reduce.call(arguments, (item, last) => {
        return item + last;
    })
}

Computed.prototype.div = function(num1, num2){
    return num1 / num2;
}

module.exports = Computed;