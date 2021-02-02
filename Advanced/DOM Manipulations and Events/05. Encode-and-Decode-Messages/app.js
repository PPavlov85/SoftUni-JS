function encodeAndDecodeMessages() {
    
    let textAreas = document.querySelectorAll('textarea')
    let buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', function(e) {
        let message = 
        textAreas[0].value.split('').map((ch) => String.fromCharCode(ch.charCodeAt(0) + 1)).join('')
        textAreas[0].value = ''
        textAreas[1].value = message
    })

    buttons[1].addEventListener('click', function(e) {
        let message =
        textAreas[1].value.split('').map((ch) => String.fromCharCode(ch.charCodeAt(0) - 1)).join('')

        textAreas[1].value = message
    })
}
