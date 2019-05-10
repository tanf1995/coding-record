interface ClockInterface{
    currentTime: Date,
    isYear: (year: number)=> boolean
}

class Clock implements ClockInterface{
    currentTime: Date;

    isYear(year: number){
        return this.currentTime.getFullYear() === year;
    }

    constructor(){
        this.currentTime = new Date;
    };
}

let c = new Clock();

let rel: boolean = c.isYear(2019);
console.log(rel);