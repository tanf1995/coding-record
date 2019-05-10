function sayHello(person) {
    person.name = "※" + person.name + "※";
    console.log("hello, i am " + person.name);
}
var p = {
    name: "Iron Man",
    age: 22
};
var p2 = {
    name: "Iron Man",
    age: 22,
    hobby: ["eating"]
};
var p3 = {
    id: 0,
    name: "Iron Man",
    age: 22,
    hobby: ["eating"]
};
sayHello(p);
sayHello(p2);
sayHello(p3);
