Promise._all = function(tasks){
    let tasks_num = tasks.length;
    let counts = 0,
        result = new Array(tasks_num);

    return new Promise((res, rej) => {
        tasks.forEach((promise, index) => {
            promise
                .then(data => {
                    result[index] = data;
                    if(++counts === tasks_num){
                        res(result);
                    }
                })
                .catch(err => {
                    rej(err);
                    result.forEach((item, index) => {
                        if (!item){
                            tasks_num[index] = null;
                        }
                    })
                    return;
                })
        })

    });
}

let getTemplate = new Promise((res, rej) => {
    setTimeout(() => {
        if(Math.random() > 0.8){
            res("web template");
        }else{
            rej("get web template failed!");
        }
    }, 1000);
});

let getData = new Promise((res, rej) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            res("web data");
        }else{
            rej("get web data failed!");
        }
    }, 3000);
});

let getLocalSource = new Promise((res, rej) => {
    setTimeout(() => {
        res("web local source");
    }, 1500);
});


Promise._all([getLocalSource, getData, getTemplate])
    .then(result => {
        result.forEach(item => {
            console.log(item);
        })
    })
    .catch(err => {
        console.log(err);
    })