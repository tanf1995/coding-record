function f1(){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

f1();

f1("t", "f");