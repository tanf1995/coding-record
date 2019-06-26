function readMsg(msg){
    console.log(msg);
}


// 模拟查询数据库
// let select  = function(cab){
//     setTimeout(function(){
//         console.log("select db");
//         let data = "today is a nice day.";

//         cab(data);
//     }, 3000)
// }

// 加入状态锁, 数据只有一次
// let status = "ready";
// let select  = function(cab){
//     if(status === "ready"){
//         status = "pending";
//         setTimeout(function(){
//             console.log("select db");
//             let data = "today is a nice day.";

//             status = "ready";
//             cab(data);
//         }, 3000) 
//     }
// }

// 引入事件队列
let EventEmitter = require("events");

class MyEmitter extends EventEmitter{};

const emitter = new MyEmitter();
let status = "ready";
let select  = function(cab){
    emitter.once("selected", cab);

    if(status === "ready"){
        status = "pending";
        setTimeout(function(){
            console.log("select db");
            let data = "today is a nice day.";

            status = "ready";
            emitter.emit("selected", data);
        }, 3000) 
    }
}


select(readMsg);
select(readMsg);
select(readMsg);
select(readMsg);