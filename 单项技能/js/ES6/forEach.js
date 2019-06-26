let li = [1, 2, 3, 4];

li.forEach(function(item, index){
    if(item === 2){
        return;
    }
    console.log(item);
})