let showMen = function(){
    let mem = process.memoryUsage();
    let format = function(bytes){
        return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    }
    console.log(`
        Process: headTotal ${format(mem.heapTotal)} heapUsed ${format(mem.heapUsed)} rss ${format(mem.rss)}
        ------------------------------------------
    `)
}

let useMem = function(){
    let size = 20 * 1024 * 1024;
    var arr = new Array(size);
    for(var i = 0;i<size;i++){
        arr[i] = 0;
    }
    return arr;
}

let total = [];

for(let i=0;i<15;i++){
    showMen();
    total.push(useMem());
}
showMen();