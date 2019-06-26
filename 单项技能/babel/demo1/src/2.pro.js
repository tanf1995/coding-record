const getData = async () => {
    return fetch('xxx.json');
}


let res = getData();

try{
    res = res.json()
    console.log(res);
}catch(err){
    console.log(err);
}

