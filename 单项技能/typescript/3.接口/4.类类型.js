var Clock = /** @class */ (function () {
    function Clock() {
        this.currentTime = new Date;
    }
    Clock.prototype.isYear = function (year) {
        return this.currentTime.getFullYear() === year;
    };
    ;
    return Clock;
}());
var c = new Clock();
var rel = c.isYear(2019);
console.log(rel);
