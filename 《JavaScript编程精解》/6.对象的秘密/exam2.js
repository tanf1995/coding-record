class Group{
    constructor(){
        this.g = [];
        Object.defineProperty(this, Symbol.iterator, {
            enumerable:false,
            writerable:false,
            configurable:true,
            value: function (){
                var li = this.g;
                var current_index = 0;
                return {
                    next: function(){
                        var h = {
                            value: li[current_index],
                            done: (current_index + 1 > li.length)
                        }
                        current_index++;
                        return h;
                    }
                }
            }
        })
    }
    add(value){
        if(this.g.indexOf(value) === -1){
            this.g.push(value);
        }
    }
    delete(value){
        this.g = this.g.filter(item => item !== value);
    }
    has(value){
        return this.g.indexOf(value) === -1 ? false : true;
    }
    static from(iteration){
        let g = new Group();

        for(let i of iteration){
            g.add(i);
        }
        return g;
    }
}

console.log("==========first=============")
let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));

console.log("==========second=============")

let g2 = Group.from([10, 20, 40, 20, 60]);
for(let v of g2){
    console.log(v);
}
g2.add("sd");
g2.delete(60);
for(let v of g2){
    console.log(v);
}