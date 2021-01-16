function solve(fruit, weight, price) {
    weight = weight / 1000
    return `I need $${(price*weight).toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80))
console.log(solve('apple', 1563, 2.35))
