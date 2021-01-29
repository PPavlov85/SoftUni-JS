function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById('searchField').value.toLowerCase()
      let rows = document.querySelectorAll('table tbody tr')

      for (let row of rows) {
         let match = row.textContent.toLowerCase().includes(input)
         
         if (match) {
            row.setAttribute('class', 'select')
         } else {
            row.removeAttribute('class')
         }
      }
      searchField.value = '';
   }
}
