var async = function(cab){
    // process.nextTick(cab);
    setTimeout(cab, 2000);
}

// 不能捕获异步回调函数的异常

try{
    async(function(){
        console.log("callback");
        throw "throw a error";
    })
    console.log("hello");
}catch(err){
    console.log("error: " + err);
}

try{
    console.log("hello");
    throw "throw a error";
}catch(err){
    console.log("error: " + err);
}