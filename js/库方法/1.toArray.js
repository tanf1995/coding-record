// Prototype 
function $A(iterable){
    if(!iterable){
        return [];
    };
    if(iterable.toArray){
        return iterable.toArray();
    };
    var len = iterable.length || 0,
        res = new Array(len);
    while(len--){
        res[len] = iterable[len];
    }
    return res;
}

function f(){
    // console.log(arguments.slice(0, 2)); // error
    console.log($A(arguments).slice(0, 2));  // [1, 2]
    console.log(Array.prototype.slice.apply(arguments, [0 ,2]));  // [1, 2]
}

f(1, 2, 3);