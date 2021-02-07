function getFibonator() {
    prevNum = 0;
    currentNum = 1;

    function fibo() {
        let result = prevNum + currentNum
        prevNum = currentNum
        currentNum = result
        return prevNum
    }
    return fibo
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
