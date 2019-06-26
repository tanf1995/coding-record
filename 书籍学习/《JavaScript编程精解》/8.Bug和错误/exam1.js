class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a, b) {
    let rel = 0;
    try{
        rel = primitiveMultiply(a, b);
    }catch (e){
        console.log("err");
        return reliableMultiply(a, b);
    }
    return rel;
}

console.log(reliableMultiply(8, 8));
