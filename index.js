const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz= document.getElementById('add-small-biz')
const addSmallBizBtn = document.getElementById('add-small-biz-button')

//add even listener for addSmallBizBtn
//when clicked, will display form
//once form is submitted, form will disappear
addSmallBizBtn.addEventListener('click', handleBizBtnEvent)

function handleBizBtnEvent(e){
  //remove the button when clicked
  addSmallBizBtn.remove()
  //display form
  addSmallBiz.innerHTML = `
  <form id="small-biz-form">
    <input type="text" name="name" id="new-biz"></input><br>
    <input type="float" name="price_range"></input><br>
    <input type="text" name="address"></input><br>
    <input id="create-small-biz" type="submit" value="Add My Small Biz"></input>
  </form>
  `
//add EventListener to form
//submit form => form disappears
//prevent the default post request
const smallBizForm = document.getElementById('small-biz-form')
smallBizForm.addEventListener("submit", handleSubmit)
}

function handleSubmit(){
  
}

SmallBusinessApi.getSmallBusinesses()