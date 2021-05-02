const landingPage = document.getElementById('landing-page')
const loginBtn = document.getElementById('login')
const joinBtn = document.getElementById('join')
const loginForm = document.getElementById('login-form')
const loginError = document.getElementById('login-error')

const navBar = document.getElementById('nav-bar')

const homePage = document.getElementById('home-page')
const smallBizPage = document.getElementById('small-biz-page')
const itemsPage = document.getElementById('items-page')

const smallBizList = document.getElementById('small-biz-list')
const addSmallBiz = document.getElementById('add-small-biz')
const smallBizForm = document.getElementById('small-biz-form')
const bizNameInput = document.getElementById('new-biz-name')
const bizPriceRangeInput = document.getElementById('new-biz-price-range')
const bizAddressInput = document.getElementById('new-biz-address')
const filterBiz = document.getElementById('filter-small-biz')

const smallBizItemList = document.getElementById('small-biz-item-list')
const addSmallBizItem = document.getElementById('add-small-biz-item')
const smallBizItemForm = document.getElementById('small-biz-item-form')
const bizItemNameInput = document.getElementById('new-item-name')
const bizItemPriceInput = document.getElementById('new-item-price')
const bizItemDescriptionInput = document.getElementById('new-item-description')
const bizItemTypeInput = document.getElementById('new-item-type-of-product')
const bizItemImageUrlInput = document.getElementById('new-item-image-url')
const bizDropdown = document.getElementById('select-small-biz')

const addSmallBizItemBtn = document.getElementById('add-small-biz-item-button')

loginError.style.display = "none"
navBar.style.display = "none"

function hideContent(){
  homePage.style.display = "none"
  smallBizPage.style.display = "none"
  itemsPage.style.display = "none"
}

hideContent()

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

navBar.addEventListener('click', handleNavBtnClick)

function handleNavBtnClick(e){
  if (e.target.innerText === "home"){
    hideContent()
    homePage.style.display = "block"
  } else if (e.target.innerText === "small biz"){
    hideContent()
    smallBizPage.style.display = "block"
  } else if (e.target.innerText === "items"){
    hideContent()
    itemsPage.style.display = "block"
  } else if (e.target.innerText === "logout"){
    hideContent()
    landingPage.style.display = "block"
    navBar.style.display = "none"
    loginError.style.display = "none"
  }
}

filterBiz.addEventListener('click', handleBizFilterSelect)

function handleBizFilterSelect(e){
  SmallBusiness.filterSmallBiz(e)
}

addSmallBizItemBtn.addEventListener('click', handleAddItemBtnClick)

function handleAddItemBtnClick(){
  SmallBusinessItem.handleAddItemClick()
}

SmallBusinessItemApi.getSmallBusinessesItems()

SmallBusinessApi.getSmallBusinesses()