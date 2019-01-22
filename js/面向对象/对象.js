function Person(name){
    this.name = name;

    var date = new Date();
    var current_year = date.getFullYear();  // 私有属性

    function con_msg(){
        console.log("this is a msg.");
    }  // 私有方法
    con_msg();

    this.get_year = function(){
        return current_year;
    }  // 特权方法
}

Person.prototype.getName = function(){
    return this.name;
}


var me = new Person("tf");

console.log(me.getName());
console.log(me.get_year());