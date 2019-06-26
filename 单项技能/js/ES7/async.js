async function basic(){
    let result = await Math.random();
    console.log(result);
}

basic()
    .then(() => {
        console.log("ss");
    })