function User(obj){
    for(var i in obj){
        (function(that){
            var item = i;
            
            that["get_" + item] = function(){
                return obj[item];
            };
            that["set_" + item] = function(value){
                obj[item] = value;
            }
        })(this);
    }
}

var me = new User({
    age: 30,
    name: "tf"
});

console.log(me.get_name());
console.log(me.get_age());