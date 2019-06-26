interface SearchFunc{
    (keyword: string, limit: number): string[];
}

let searchFunc: SearchFunc;

searchFunc = (keyword, lim) => {
    return ["res"];
}

let search1 = searchFunc("hello", 10);
console.log(search1);