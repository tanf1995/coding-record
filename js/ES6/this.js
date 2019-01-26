var o = {
    value: 1,
    f1: function(){
        console.log(this);
        function inner(){
            console.log(this);  // 全局对象
        }
        return inner;
    }
}

o.f1()();