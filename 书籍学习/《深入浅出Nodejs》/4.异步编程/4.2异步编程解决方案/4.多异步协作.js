let EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();


let render = function(result){
    console.log(result.localSource);
    console.log(result.data);
    console.log(result.template);
}

let after =  function(times, cb){
    let counts = 0,
        result = {};

    return function(key, value){
        result[key] = value;

        if(++counts === times){
            cb(result);
        }
    }
}


let server = function(){
    let renderWeb = after(3, render);

    emitter.on("getTemplate", function(data){
        renderWeb("template", data);
    });
    emitter.on("getData", function(data){
        renderWeb("data", data);
    });
    emitter.on("getLocalSource", function(data){
        renderWeb("localSource", data)
    });

    setTimeout(function(){
        emitter.emit("getTemplate", "web template");
    }, 1000)

    setTimeout(function(){
        emitter.emit("getData", "server data");
    }, 3000)

    setTimeout(function(){
        emitter.emit("getLocalSource", "local source");
    }, 2000)
}

server();