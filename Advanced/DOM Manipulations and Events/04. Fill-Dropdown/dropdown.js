function addItem() {
    
    let textContent = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');
    let option = document.createElement('option')

    option.textContent = textContent.value;
    option.value = inputValue.value
    textContent.value = ''
    inputValue.value = ''
    
    document.getElementById('menu').appendChild(option)

}
