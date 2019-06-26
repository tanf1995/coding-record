function identity<T>(arg: T): T {
    return arg;
}

let output = identity<number>(23); // T => number
let output2 = identity("hello");  // T => string
console.log(output, output2);


class People<T>{
    selfValue: T;
    add: (x: T, y: T) => T;
}

let p = new People<number>();

p.selfValue = 10;
p.add = (x, y) => x + y;
console.log(p.add(3, 3));

let p2 = new People<string>();

p2.selfValue = "zs";
p2.add = (x, y) => x + " " + y;
console.log(p2.add("iron", "man"));