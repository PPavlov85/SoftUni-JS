function solve(...args) {
    
    let output = {};

    args.forEach((arg) => {
        let typeArg = typeof(arg)

        if (!output.hasOwnProperty(typeArg)) {
            output[typeArg] = 0;
        }

        output[typeArg]++;

        console.log(`${typeArg}: ${arg}`);
        
    })
    
    Object.keys(output).sort((a, b) => output.b - output.a).forEach(key => console.log(`${key} = ${output[key]}`))
    
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }));
