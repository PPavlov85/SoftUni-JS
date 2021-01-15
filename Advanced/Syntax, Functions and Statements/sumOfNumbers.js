function sumNumbersFrom(a, b) {
    a = Number(a);
    b = Number(b);

    let result = 0;
    
    for (let num = a; num <= b; num++) {
        result += num;
    }
    
    console.log(result);
}

sumNumbersFrom('1', '5')
sumNumbersFrom('-8', '20')
