function solve() {
  let sentences = document.getElementById('input').value.split('.')
  .map((s) => s.trim()).filter(s => s.length > 0)
  let div = document.getElementById('output')

  for (let i = 0; i < sentences.length; i += 3) {
    div.innerHTML += `<p>${sentences.slice(i, i + 3).join('.')}.</p>`
  }
}
