function solve(n, k) {
    
    let arr = [1,]
    
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, b) => a + b, 0))
    }
    return arr
}

console.log(solve(6, 3));
console.log(solve(8, 2));
