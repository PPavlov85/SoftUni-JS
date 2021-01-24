function solve(arr) {
    
    let log = {};

    while (arr.length) {
        let firstProduct = arr.shift();
        let [town, product, price] = firstProduct.split(' | ');
        price = Number(price);

        if (!(log[product])) {
            log[product] = { price, town }
        } else {
            log[product] = log[product].price <= price ? log[product] : { town, price };
        }
    }

    let result = [];
    for (const product in log) {
        result.push(`${product} -> ${log[product].price} (${log[product].town})`)
    }

    return result.join('\n')
}

console.log(solve(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
));
