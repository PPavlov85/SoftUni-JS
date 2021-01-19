function solve(arr) {
    result = []

    for (let el = 0; el < arr.length; el+=2) {
         result.push(arr[el])
    }
    return result.join(' ')
}

console.log(solve(['20', '30', '40', '50', '60']));
console.log(solve(['5', '10']));
