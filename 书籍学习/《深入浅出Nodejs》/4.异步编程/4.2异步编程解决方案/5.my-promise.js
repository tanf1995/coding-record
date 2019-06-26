// let p = new Promise(
//     (res, rej) => {
//         setTimeout(() => {
//             let rand_num = Math.random();

//             if(rand_num >= 0.5){
//                 res("rand num is greater than 0.5");
//             }else{
//                 rej("rand num is not greater than 0.5");
//             }
//         }, 1500);
//     }
// );

// p
//     .then(data => {
//         console.log("resolve: " + data);
//     })
//     .catch(err => {
//         console.log("reject: " + err);
//     })


// my promise
let EventEmitter = require("events");

class MyEmitter extends EventEmitter{};
const emitter = new MyEmitter();

function _Promise(func){
    this.status = "ready";

    func(this.resolve, this.reject);
}

_Promise.prototype.resolve = function(data){
    emitter.emit("resolve", data);
}

_Promise.prototype.reject = function(error){
    emitter.emit("reject", error);
}

_Promise.prototype.then = function(cab){
    emitter.once("resolve", (data) => {
        if(this.status === "ready"){
            this.status = "filled";
            cab(data);
        }
    });
    return this;
}

_Promise.prototype.catch = function(cab){
    emitter.once("reject", (error) => {
        if(this.status === "ready"){
            this.status = "failed";
            cab(error);
        }
    });
    return this;
}

let m_p = new _Promise(
    (res, rej) => {
        setTimeout(() => {
            let rand_num = Math.random();

            if(rand_num >= 0.5){
                res("rand num is greater than 0.5");
                rej("rand num is not greater than 0.5");
            }else{
                rej("rand num is not greater than 0.5");
            }
        }, 500);
    }
)

m_p
    .then(data => {
        console.log("resolve: " + data);
        console.log(m_p.status);
    })
    .catch(err => {
        console.log("reject: " + err);
        console.log(m_p.status);
    })