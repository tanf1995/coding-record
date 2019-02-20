function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        // Your code here.
        let rel = [];
        let resolve_num = 0;

        if(promises.length === 0){
            resolve(rel);
        }
        for(let i in promises){
            promises[i]
                .then(val => {
                    rel[i] = val;
                    resolve_num++;
                    if(resolve_num === promises.length){
                        resolve(rel);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        }
    });
}

// Test code.
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 500);
    });
}

Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log("This should be [1, 2, 3]:", array);
});

Promise_all([soon(1), Promise.reject("X"), soon(3)])
    .then(array => {
        console.log("We should not get here");
    })
    .catch(error => {
        if (error != "X") {
            console.log("Unexpected failure:", error);
        }
        console.log("nice answer!")
    });