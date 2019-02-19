class PGroup{
    constructor(li){
        this.g = li ? li : [];
    }
    add(value){
        let li = this.g.concat();
        if(!li.includes(value)){
            li.push(value);
        }
        return new PGroup(li);
    }
    delete(value){
        let li = this.g.filter(item => item !== value);
        return new PGroup(li);
    }
    has(value){
        return this.g.indexOf(value) === -1 ? false : true;
    }
}
PGroup.empty = new PGroup();

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");
console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));