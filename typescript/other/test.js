const fibonacci = (n) => /* TODO */
{
  if(n <= 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}

// console.log(fibonacci(50))


const fibonacci2 = (n) => {
    let fib = (prev, next, count) => {
        if(count === 0){
            return prev;
        }else{
            return fib(next, next + prev, count - 1);
        }
    }

    return fib(0, 1, n);
}

console.log(fibonacci2(50));