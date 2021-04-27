const smallBizList = document.getElementById('small-biz-list')
const smallBizItemList = document.getElementById('small-biz-item-list')
const addSmallBizItem = document.getElementById('add-small-biz-item')
const smallBizItemForm = document.getElementById('small-biz-item-form')
const bizItemNameInput = document.getElementById('new-item-name')
const bizItemPriceInput = document.getElementById('new-item-price')
const bizItemDescriptionInput = document.getElementById('new-item-description')
const bizItemTypeInput = document.getElementById('new-item-type-of-product')
const bizItemImageUrlInput = document.getElementById('new-item-image-url')
const addSmallBizItemBtn = document.getElementById('add-small-biz-item-button')


function hideSmallBizItemForm(){
  smallBizItemForm.style.display = "none"
}

hideSmallBizItemForm()

addSmallBizItemBtn.addEventListener('click', handleItemBtnEvent)

function handleItemBtnEvent(){
  addSmallBizItemBtn.remove()
  smallBizItemForm.style.display = "block"

  smallBizItemForm.addEventListener('submit', handleItemSubmit)
}

function handleItemSubmit(e){
  e.preventDefault()
  smallBizItemForm.style.display = "none"
  SmallBusinessItemApi.createSmallBizItem()
  smallBizItemForm.reset()
  addSmallBizItem.append(addSmallBizItemBtn)
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