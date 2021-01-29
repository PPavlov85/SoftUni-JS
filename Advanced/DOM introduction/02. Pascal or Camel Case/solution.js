function solve() {

  let string = document.getElementById('text').value;
  let secondParam = document.getElementById('naming-convention').value;
  
  if (secondParam === "Camel Case") {

    string = string.toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    
    document.getElementById('result').textContent = string;

  } else if (secondParam === "Pascal Case") {
    
    string = string.replace(/\w\S*/g, m => m.charAt(0).toUpperCase() +
    m.substr(1).toLowerCase());
    
    document.getElementById('result').textContent = string;

  } else {
    document.getElementById('result').textContent = 'Error!';
  }
  
}
