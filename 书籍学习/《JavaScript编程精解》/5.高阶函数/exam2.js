function loop(value, testF, updateF, mainF){
    while(testF(value)){
        mainF(value);
        value = updateF(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);