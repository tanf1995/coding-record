// 定义
let isDone: boolean = false;
let count: number = 0;
let st: string = "hello";
let list: number[] = [1, 2, 3];
let list2: Array<number> = [4, 5, 6];
let tup: [string, number, number];
let notSure: any = 4;

if(isDone){
    console.log("true");
}else{
    console.log("false");
}

tup = ["yep", 10, 20];
console.log(tup[2].toString());


enum Color {
    Red, Green, Blue
}

let c: Color = Color.Green;
console.log(c);
console.log(Color[c]);

notSure = "str";