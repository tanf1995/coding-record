class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(){
        this.celsius = ( value - 32 ) / 1.8;
    }
    static fromFah(value){
        return new Temperature(( value - 32 ) / 1.8);
    }
}

let t = new Temperature(22);
console.log(t.fahrenheit);