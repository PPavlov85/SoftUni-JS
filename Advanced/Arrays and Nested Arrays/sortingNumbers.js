function solve(arr) {
    let result = []
    let current
    
    while (arr.length > 0) {
        
        if (result.length % 2 === 0) {
            current = Math.min(...arr);
        }
        else {
            current = Math.max(...arr);
        }

        arr.splice(arr.indexOf(current), 1);
        result.push(current);
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
