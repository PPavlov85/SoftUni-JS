function add(n) {
    let sum = 0;
    sum += n;

    function calc(n) {
        sum += n;
        return calc
    }
    calc.toString = () => sum;
    return calc
}

console.log(add(1).toString()); //1
console.log(add(1)(6)(-3).toString()); //4
