const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz= document.getElementById('add-small-biz')
const addSmallBizBtn = document.getElementById('add-small-biz-button')
const smallBizItemList = document.getElementById('small-biz-item-list')
const addSmallBizItem = document.getElementById('add-small-biz-item')
const addSmallBizItemBtn = document.getElementById('add-small-biz-item-button')

addSmallBizBtn.addEventListener('click', handleBizBtnEvent)

function handleBizBtnEvent(){
  //remove the button when clicked
  addSmallBizBtn.remove()
  //display form
  addSmallBiz.innerHTML = `
  <form id="small-biz-form">
      <label for="biz-name">Biz Name: </label><br>
      <input type="text" name="name" id="new-biz-name"></input><br>
      <label for="biz-price-range">Price Range: </label><br>
      <input type="float" name="price_range" id="new-biz-price-range"></input><br>
      <label for="biz-address">Address: </label><br>
      <input type="text" name="address" id="new-biz-address"></input><br>
      <input id="create-small-biz" type="submit" value="Add My Small Biz"></input>
  </form>
  `
  //add EventListener to form
  //submit form => form disappears
  //prevent the default post request
  const smallBizForm = document.getElementById('small-biz-form')
  smallBizForm.addEventListener("submit", handleSmallBizSubmit)
}

function handleSmallBizSubmit(e){
  e.preventDefault()
  //grab value from input field
  // const newBizName = document.getElementById('new-biz-name')
  // const newBizPriceRange = document.getElementById('new-biz-price-range')
  // const newBizAddress = document.getElementById('new-biz-address')
  //add new biz to list
  //reset the page so form is gone
  SmallBusinessItemApi.createSmallBizItem()
  smallBizForm.reset()
  //add button back 
}

SmallBusinessItemApi.getSmallBusinessesItems()

SmallBusinessApi.getSmallBusinesses()