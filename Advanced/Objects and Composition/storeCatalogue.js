function solve(arr) {

    arr = arr.sort()
    let catalog = {}

    while (arr.length) {
        let [name, price] = (arr.shift()).split(' : ')
        const firstLetter = name[0]
        
        if (!(catalog[firstLetter])) {
            catalog[firstLetter] = []
        }

        catalog[firstLetter].push({name, price: Number(price)})
    }
    
    let result = []

    for (let letter in catalog) {
        let values = catalog[letter].map(entry => `  ${entry.name}: ${entry.price}`)
        let string = `${letter}\n${values.join('\n')}`
        result.push(string)
    }
    return result.join('\n')
}

console.log(solve(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
));

console.log(solve(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
));
