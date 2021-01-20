function solve(arr) {

    let result = []
    let max = Number.MIN_SAFE_INTEGER
  
    arr.forEach((n) => {
      
        if (max <= n) {
        max = n
        result.push(max)
      }

    });

    return result
  }


console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(solve([1, 2, 3, 4]));
console.log(solve([20, 3, 2, 15, 6, 1]));
