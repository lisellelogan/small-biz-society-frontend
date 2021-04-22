fetch('http://localhost:3000/small_business_items')
  .then(response => response.json())
  .then(data => console.log(data));