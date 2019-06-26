var o = {
    a: 1
}

var s = o.a;
Object.defineProperty(o, "a", {
    get(){
        
    },
    set(value){
        if(value === s){
            console.log("equal");
        }else{
            console.log("mistake");
        }
    }
})

o.a = "s";
o.a = 1;