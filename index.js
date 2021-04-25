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
  //submit form => form disappears
  addSmallBiz.innerHTML = `
  <form>
    <input type="text" name="name" id="new-biz"></input><br>
    <input type="float" name="price_range"></input><br>
    <input type="text" name="address"></input><br>
    <input id="create-small-biz" type="submit" value="Add My Small Biz"></input>
</form>
  `
}

SmallBusinessApi.getSmallBusinesses()