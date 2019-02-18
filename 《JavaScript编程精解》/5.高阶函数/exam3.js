function every1(arr, test){
    var rel = true;
    for(let i of arr){
        rel = rel && test(i);
    }
    return rel;
}

function every2(arr, test){
    var rel = true;
    arr.some((i) => {
        rel = rel && test(i);
    });
    return rel;
}

console.log(every1([1, 3, 5], n => n < 10));
console.log(every1([2, 4, 16], n => n < 10));
console.log(every1([], n => n < 10));

console.log(every2([1, 3, 5], n => n < 10));
console.log(every2([2, 4, 16], n => n < 10));
console.log(every2([], n => n < 10));
