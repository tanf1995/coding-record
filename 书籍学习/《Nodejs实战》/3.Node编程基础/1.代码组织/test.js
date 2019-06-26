var li = [1, 2, 3];

var rel = Array.prototype.reduce.call(li, (item, old) => item+old);

var rel2 = Array.prototype.reduce.apply(li, [(item, old) => item+old]);

console.log(rel, rel2);