interface Person{
    name: string;
    hobby?: string[];  // 可选属性
    readonly id?: number; // 只读属性
    [propName: string]: any; // 索引签名
}

function sayHello(person: Person){
    person.name = "※" + person.name + "※";
    console.log(
        `hello, i am ${person.name}`
    );
}

let p = {
    name: "Iron Man",
    age: 22
};

let p2 = {
    name: "Iron Man",
    age: 22,
    hobby: ["eating"]
};

let p3 = {
    id: 0,
    name: "Iron Man",
    age: 22,
    hobby: ["eating"]
};

sayHello(p);
sayHello(p2);
sayHello(p3);
sayHello({name: "caption american", gender: "male"} as Person);