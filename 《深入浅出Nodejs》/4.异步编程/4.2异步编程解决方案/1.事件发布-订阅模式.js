let EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();
const emitter2 = new MyEmitter();

emitter.on("event1", function(msg){
    console.log(msg);
})
emitter2.on("event1", function(msg){
    console.log(msg);
})

setTimeout(function(){
    emitter.emit("event1", "i am message");
}, 2000)

emitter2.emit("event1", "emitter2 emit");