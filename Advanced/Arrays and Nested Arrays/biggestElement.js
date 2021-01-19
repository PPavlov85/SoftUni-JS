function solve(arr) {
    let newArr = []
    arr.forEach(row => newArr.push(Math.max(...row)));
    return Math.max(...newArr);
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));

console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));
