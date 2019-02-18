function noisy(f){
    return (...args) => {
        console.log("calling with", args);
        let res = f(...args);
        console.log('called with', args, ", returned", res);
        return res;
    }
}

noisy(Math.min)(3, 2, 1);
