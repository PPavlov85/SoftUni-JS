function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let input = JSON.parse(document.getElementsByTagName('textarea')[0].value)
      console.log(input)
      
   }
}
