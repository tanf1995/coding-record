var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.className = "Person";
        this.country = "china";
    }
    Person.prototype.sayHello = function () {
        console.log("Hello!I am " + this.name);
    };
    return Person;
}());
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.gender = 'male';
        return _this;
    }
    Man.prototype.showGender = function () {
        console.log("my gender is " + this.gender);
    };
    Man.prototype.showCountry = function () {
        console.log("i am come from " + this.country);
    };
    return Man;
}(Person));
var p1 = new Man("Iron Man", 40);
var p2 = new Man("caption america");
p1.sayHello();
p2.sayHello();
p2.showGender();
p2.showCountry();
