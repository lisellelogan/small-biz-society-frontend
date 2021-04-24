 const smallBizList = document.getElementById('small-biz-list')
 const addSmallBizItem = document.getElementById('add-small-biz-item')
 const addSmallBizItemBtn = document.getElementById('add-small-biz-button')


//  SmallBusinessApi.getSmallBusinesses()
fetch('http://localhost:3000/small_businesses')
.then(response => response.json())
.then(data => console.log(data));