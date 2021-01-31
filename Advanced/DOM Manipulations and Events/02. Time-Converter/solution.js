function attachEventsListeners() {

    document.querySelectorAll('input[type=button]').forEach(el => {

        el.addEventListener('click', (e) => {

            let currentButton = e.target
            let currentInput = currentButton.parentNode.querySelector('input[type=text]')
            let input = Number(currentInput.value)

            const calcUnits = {
                'days': [
                    input * 24,
                    input * 1440,
                    input * 86400,
                ],
                'hours': [
                    input / 24,
                    input * 60,
                    input * 3600,
                ],
                'minutes': [
                    input / 1440,
                    input / 60,
                    input * 60,
                ],
                'seconds': [
                    input / 86400,
                    input / 3600,
                    input / 60,
                ],
            };

            let inputs = document.querySelectorAll('input[type=text]')

            for (let i = 0; i < inputs.length; i++) {
                let result = inputs[i].value
                result = calcUnits[inputs[i].id]
                console.log(...result)
            }
        })
    })

}
