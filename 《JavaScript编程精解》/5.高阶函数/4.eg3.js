function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
        console.log(counts);
    }
    return counts;
}
console.log(countBy([1, 2, 3, 4, 5], n => n > 2));