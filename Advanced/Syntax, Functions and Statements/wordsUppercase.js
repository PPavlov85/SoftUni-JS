function uppercase(text) {
    return text.match(/\w+/g).join(", ").toLocaleUpperCase()
}
console.log(uppercase('Hi, how are you?'));
console.log(uppercase('hello'));
