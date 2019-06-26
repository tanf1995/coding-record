let fifteen = Promise.resolve(15);
let ten = Promise.reject(20);

fifteen.then(val => console.log(val));
ten.catch(err => console.log(err));