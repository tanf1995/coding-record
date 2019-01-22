(function(){
    Function.prototype.method = function(name, func){
        this.prototype[name] = func;
        return this;
    }
    
    Function.method('inherits', function(Parent){
        var depth = 0;
        var proto = this.prototype = new Parent();
    
        this.method('uber', function(name){
            var func,
                ret;
            var v = Parent.prototype;
    
            if(depth){
                for(var i = depth;i > 0;i++){
                    v = v.constructor.prototype;
                }
    
                func = v[name];
            }else{
                func = proto[name];
                if(func == this[name]){
                    func = v[name];
                }
            }
            depth++;
            ret = func.apply(this, Array.prototype.slice.apply(arguments, [1]));
            depth--;
            return ret;
        });
        return this;
    });
    
    Function.method('swiss', function(Parent){
        for(var i=1;i<arguments.length;i++){
            var name = arguments[i];
            this.prototype[name] = Parent.prototype[name];
        }
        return this;
    });
    
    
    function Person(name){
        this.name = name;
    }
    
    Person.method('getName', function(){
        return this.name;
    })
    
    function User(name, pwd){
        this.name = name;
        this.pwd = pwd;
    }
    
    User.inherits(Person);
    
    User.method('getPwd', function(){
        return this.pwd;
    })
    
    User.method('getName', function(){
        return 'My name is: ' + this.uber('getName'); 
    })
    
    
    var user = new User("tf", "123");
    console.log(user.getPwd());
    console.log(user.getName());
})();
