function toggle() {
    let spanEl = document.getElementsByClassName('button')[0]
    let divEl = document.getElementById('extra')

    divEl.style.display = divEl.style.display === 'none' ? 'block' : 'none'
    spanEl.textContent = spanEl.textContent === 'More' ? 'Less' : 'More'

}
