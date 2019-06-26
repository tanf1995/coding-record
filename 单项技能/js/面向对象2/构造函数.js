function f(){}

Function.prototype._constructor = Function.prototype.constructor;
Object.defineProperty(Function.prototype, 'constructor', {
    get: function(){
        console.log("Function constructor is used.");
        return this._constructor;
    }
})

function f1(){}
var st = "console.log('hello')";

f2 = new window.Function.prototype.constructor(st);
f2();

