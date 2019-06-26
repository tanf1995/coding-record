let arr = [[1, 2, 3], [4, 5], [6]];

function toOne(arr){
    return arr.reduce((a, b) => a.concat(b));
}

console.log(toOne(arr));