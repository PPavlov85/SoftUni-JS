function solve(arr) {
    console.log(arr.reduce((a, c) => a + c, 0));
    console.log(arr.reduce((a, c) => a + 1/c, 0));
    console.log(arr.reduce((a, c) => a + c, ''));
}

solve([1, 2, 3]);
solve([2, 4, 8, 16]);
