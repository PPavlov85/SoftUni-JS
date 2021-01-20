function solve(arr) {
    arr.sort()
    arr.forEach((el, i) => console.log(`${i + 1}.${el}`))
}

solve(["John", "Bob", "Christina", "Ema"]);
