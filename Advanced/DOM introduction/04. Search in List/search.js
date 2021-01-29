function search() {
   let towns = document.querySelectorAll('ul li')
   let input = document.getElementById('searchText').value
   let result = document.getElementById('result')

   let sum = 0

   for (let li of towns) {
      
      if ((li.textContent).toLowerCase().includes(input.toLowerCase())) {
         li.style.fontWeight = 'bold'
         li.style.textDecoration = 'underline'
         sum ++
      } else {
         li.style.fontWeight = ''
         li.style.textDecoration = ''
      }
   }

   result.textContent = `${sum} matches found`
}
