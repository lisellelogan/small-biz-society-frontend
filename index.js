const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz= document.getElementById('add-small-biz')
const smallBizForm = document.getElementById('small-biz-form')
const addSmallBizBtn = document.getElementById('add-small-biz-button')
const smallBizItemList = document.getElementById('small-biz-item-list')
const addSmallBizItem = document.getElementById('add-small-biz-item')
const addSmallBizItemBtn = document.getElementById('add-small-biz-item-button')
const bizNameInput = document.getElementById('new-biz-name')
const bizPriceRangeInput = document.getElementById('new-biz-price-range')
const bizAddressInput = document.getElementById('new-biz-address')


function hideSmallBizForm(){
  smallBizForm.style.display = "none"
}

hideSmallBizForm()

addSmallBizBtn.addEventListener('click', handleBizBtnEvent)

function handleBizBtnEvent(){
  addSmallBizBtn.remove()
  smallBizForm.style.display = "block"

  smallBizForm.addEventListener('submit', handleSmallBizSubmit)
}

function handleSmallBizSubmit(e){
  e.preventDefault()
  smallBizForm.style.display = "none"
  SmallBusinessApi.createSmallBiz()
  smallBizForm.reset()
  addSmallBiz.append(addSmallBizBtn)
  //grab value from input field
  // const bizNameInput = document.getElementById('new-biz-name')
  // const bizPriceRangeInput = document.getElementById('new-biz-price-range')
  // const bizAddressInput = document.getElementById('new-biz-address')
  //add new biz to list
  //reset the page so form is gone
  //add button back 
}

SmallBusinessItemApi.getSmallBusinessesItems()

SmallBusinessApi.getSmallBusinesses()