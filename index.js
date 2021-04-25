const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz= document.getElementById('add-small-biz')
const addSmallBizBtn = document.getElementById('add-small-biz-button')

//add even listener for addSmallBizBtn
//when clicked, will display form
//once form is submitted, form will disappear
addSmallBizBtn.addEventListener('click', handleBizBtnEvent)

function handleBizBtnEvent(e){
  //remove the button when clicked
  //display form
  //submit form => form disappears
  
}

SmallBusinessApi.getSmallBusinesses()