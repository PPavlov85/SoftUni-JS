function printStars(a = 5) {
    for (let i = 0; i < a; i++) {
        console.log('* '.repeat(a));
    }
}

printStars(1);
printStars(4);
printStars();
