fetch('http://localhost:3000/small_business_items')
  .then(response => response.json())
  .then(data => console.log(data));

 const smallBizList = document.getElementById('small-biz-list')

 const addSmallBizItem = document.getElementById('add-small-biz-item')