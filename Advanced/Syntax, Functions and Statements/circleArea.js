function solve(a) {
    
    if (typeof(a) == 'number') {
        result = (a * a) * Math.PI
        console.log(result.toFixed(2))
    }
    else {
        result = `We can not calculate the circle area, because we receive a ${typeof(a)}.`
        console.log(result)
    }
}

solve(5)
solve('name')
