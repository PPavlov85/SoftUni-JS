function sort(arr, order) {
    const map = {
        'asc': ((a, b) => a - b),
        'desc': ((a, b) => b - a)
    }
    return arr.sort(map[order])
}

console.log(sort([14, 7, 17, 6, 8], 'asc'))
console.log(sort([14, 7, 17, 6, 8], 'desc'))
