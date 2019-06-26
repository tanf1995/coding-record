var Person = /** @class */ (function () {
    function Person(_firstName, _lastName) {
        if (_firstName === void 0) { _firstName = ""; }
        if (_lastName === void 0) { _lastName = ""; }
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
            this.fullName = this._firstName + " " + this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
            this.fullName = this._firstName + " " + this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.lastName = "Man";
console.log(p.fullName);
p.firstName = "Icon";
console.log(p.fullName);
