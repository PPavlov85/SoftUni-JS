function subtract() {

    let firstNum = document.getElementById('firstNumber').value;
    let secondNUm = document.getElementById('secondNumber').value;


    let result = Number(firstNum) - Number(secondNUm);
    
    document.getElementById('result').textContent = result
}
