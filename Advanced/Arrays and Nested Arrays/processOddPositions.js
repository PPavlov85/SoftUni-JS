 function solve(arr) {
    
    for (let i = 0; i < arr.length; i+=1) {
        arr.splice(i, 1)
    }

    return arr.map(x => x * 2).reverse()
 }

 console.log(solve([10, 15, 20, 25]));
 console.log(solve([3, 0, 10, 4, 7, 3]));
