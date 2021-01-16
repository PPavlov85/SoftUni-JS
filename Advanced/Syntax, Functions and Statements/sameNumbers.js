function solve(number) {
    number = number.toString()
    let isSame = true
    let sum = 0

    for (let i=0; i < number.length; i++) {
        let nextNumber = number[i + 1]
        if (number[i] !== nextNumber && nextNumber !== undefined) {
            isSame = false
        }
        sum += Number(number[i])
    }
    return `${isSame}\n${sum}`;
}

console.log(solve(2222222))
console.log(solve(1234))
