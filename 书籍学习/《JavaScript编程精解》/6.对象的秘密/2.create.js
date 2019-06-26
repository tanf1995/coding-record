let parent = {
    name: "zs",
    say: function(){
        console.log(`hello, i am ${this.name}`);
    }
}

parent.say();

let child = Object.create(parent);
child.name = "ls";

child.say();