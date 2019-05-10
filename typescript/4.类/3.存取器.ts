class Person{
    public fullName: string;
    static readonly className: string = "Person";
    constructor(private _firstName: string = "", private _lastName: string = ""){}

    get firstName(): string{
        return this._firstName;
    }

    set firstName(value: string){
        this._firstName = value;
        this.fullName = this._firstName + " " + this._lastName;
    }

    get lastName(): string{
        return this._lastName;
    }

    set lastName(value: string){
        this._lastName = value;
        this.fullName = this._firstName + " " + this._lastName;
    }
}

let p = new Person();
p.lastName = "Man";
console.log(p.fullName);
p.firstName = "Icon";
console.log(p.fullName);

console.log(Person.className);