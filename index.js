const smallbizsocietyContent = document.getElementById("smallbizsociety-content")
const landingPage = document.getElementById('landing-page')
const loginBtn = document.getElementById('login')
const joinBtn = document.getElementById('join')
const loginForm = document.getElementById('login-form')

const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz = document.getElementById('add-small-biz')
const smallBizForm = document.getElementById('small-biz-form')
const bizNameInput = document.getElementById('new-biz-name')
const bizPriceRangeInput = document.getElementById('new-biz-price-range')
const bizAddressInput = document.getElementById('new-biz-address')
// const addSmallBizBtn = document.getElementById('add-small-biz-button')

const smallBizItemList = document.getElementById('small-biz-item-list')
const addSmallBizItem = document.getElementById('add-small-biz-item')
const smallBizItemForm = document.getElementById('small-biz-item-form')
const bizItemNameInput = document.getElementById('new-item-name')
const bizItemPriceInput = document.getElementById('new-item-price')
const bizItemDescriptionInput = document.getElementById('new-item-description')
const bizItemTypeInput = document.getElementById('new-item-type-of-product')
const bizItemImageUrlInput = document.getElementById('new-item-image-url')
const addSmallBizItemBtn = document.getElementById('add-small-biz-item-button')

smallbizsocietyContent.style.display = "none"

function hideForms(){
  loginForm.style.display = "none"
  smallBizForm.style.display = "none"
  smallBizItemForm.style.display = "none"
}

hideForms()

loginBtn.addEventListener('click', handleLoinOrJoinClick)
joinBtn.addEventListener('click', handleLoinOrJoinClick)

function handleLoinOrJoinClick(e){
  if (e.target.innerText === "login"){
    SmallBusiness.handleLoginClick()
    
  } else if (e.target.innerText === "join us"){
    SmallBusiness.handleJoinClick()
  }
}

// addSmallBizBtn.addEventListener('click', handleBtnEvent)
addSmallBizItemBtn.addEventListener('click', handleBtnEvent)

function handleBtnEvent(e){
  // if (e.target.innerText === "add biz"){
  //   addSmallBizBtn.remove()
  //   smallBizForm.style.display = "block"
  //   smallBizForm.addEventListener('submit', handleSubmit)

  if (e.target.innerText === "add item"){
    addSmallBizItemBtn.remove()
    smallBizItemForm.style.display = "block"
    smallBizItemForm.addEventListener('submit', handleSubmit)
  }
}

function handleSubmit(e){
  e.preventDefault()
  // if (e.target === smallBizForm){
  //   smallBizForm.style.display = "none"
  //   SmallBusinessApi.createSmallBiz()
  //   smallBizForm.reset()
  //   addSmallBiz.append(addSmallBizBtn)

  if (e.target === smallBizItemForm){
    smallBizItemForm.style.display = "none"
    SmallBusinessItemApi.createSmallBizItem()
    smallBizItemForm.reset()
    addSmallBizItem.append(addSmallBizItemBtn)
  }
}

SmallBusinessItemApi.getSmallBusinessesItems()

SmallBusinessApi.getSmallBusinesses()