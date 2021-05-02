class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.priceRange = price_range
        this.address = address

        this.li = document.createElement("li")
        this.li.id = `small-biz-${this.id}`

        this.li.addEventListener('click', this.handleClick)

        SmallBusiness.all.push(this)
    }

    smallBizItem(){
        return SmallBusinessItem.all.filter((bizItem) => bizItem.smallBusinessId === parseInt(this.id))
    }

    static handleLoginClick(){
        loginBtn.remove()
        loginForm.style.display = "block"

        smallBizForm.style.display = "none"
        landingPage.append(joinBtn)
        joinBtn.addEventListener('click', this.handleJoinClick)

        loginForm.addEventListener('submit', this.handleLoginSubmit)
    }

    static handleLoginSubmit(e){
        e.preventDefault()
        const loginName = loginForm.querySelector('#login-biz-name').value
        
        SmallBusiness.all.forEach(smallBiz => {
            if (loginName.toLowerCase() === smallBiz.name.toLowerCase()){
                landingPage.style.display = "none"
                navBar.style.display = "block"
                homePage.style.display = "block"
            } else {
                loginError.style.display = "block"
            }
        })
        loginForm.reset()
    }

    static handleJoinClick(){
        joinBtn.remove()
        smallBizForm.style.display = "block"
        loginError.style.display = "none"

        loginForm.style.display = "none"
        landingPage.append(loginBtn)

        loginBtn.addEventListener('click', this.handleLoinClick)

        smallBizForm.addEventListener('submit', this.handleJoinSubmit)
    }

    static handleJoinSubmit(e){
        e.preventDefault()
        const bizFormData = {
            name: bizNameInput.value,
            price_range: bizPriceRangeInput.value,
            address: bizAddressInput.value
        }
        SmallBusinessApi.findOrCreateSmallBiz(bizFormData)
        landingPage.style.display = "none"
        homePage.style.display = "block"
    }

    handleClick = (e) => {
        if (e.target.innerText === 'edit this'){
            e.target.innerText = 'update'
            this.editBizForm(e.target)

        } else if (e.target.innerText === 'delete this'){
            this.deleteBiz(e)

        } else if (e.target.innerText === 'update'){
            this.updateBiz(e.target.parentElement)
            e.target.innerText = 'edit this'
        }
    }

    editBizForm = (btn) => {
        const editLi = btn.parentElement
        const editDiv = btn.parentElement.firstElementChild
        
        const name = editLi.querySelector('.small-biz-name').innerText
        const priceRange = editLi.querySelector('.small-biz-price-range').innerText
        const address = editLi.querySelector('.small-biz-address').innerText

        editDiv.innerHTML = `
        Name: <input type="text" name="name" class="update-biz-name" value="${name}"></input><br>
        Price Range: <input type="text" name="price_range" class="update-biz-price-range" value="${priceRange}"></input><br>
        Address: <input type="text" name="address" class="update-biz-address" value="${address}"></input><br>
        `
    }

    updateBiz = (editLi) => {
        this.name = editLi.querySelector('.update-biz-name').value
        this.priceRange = editLi.querySelector('.update-biz-price-range').value
        this.address = editLi.querySelector('.update-biz-address').value

        SmallBusinessApi.patchBiz(this)
    }

    deleteBiz =(e) => {
        if (window.confirm('Are you sure you want to delete this?')){
            this.li.remove()
            SmallBusinessApi.deleteSmallBiz(this.id)
        }
    }

    addBizToLi(){
        this.li.innerHTML = `
        <div data-id="${this.id}">
            <strong class="small-biz-name">${this.name}</strong><br>
            Price Range: <span class="small-biz-price-range">${this.priceRange}</span><br>
            Address: <span class="small-biz-address">${this.address}</span><br>
        </div>
        <button class="biz-edit" data-id="${this.id}">edit this</button>
        <button class="biz-delete" data-id="${this.id}">delete this</button>
        <br><br>
        `
        return this.li
    }

    addSmallBizToDom(){
        smallBizList.append(this.addBizToLi())
    }

    addBizToDropdown(){
        const option = document.createElement('option')
        option.value = this.id 
        option.innerText = this.name 
        bizDropdown.append(option)
    }

    static filterSmallBiz(filterOption){
        if (filterOption.innerText === "price range"){
            priceRangeButtonsContainer.style.display = "block"
        } else {
            debugger
            smallBizList.style.display = "block"
            lowPriceRangeList.style.display ="none"
            midPriceRangeList.style.display = "none"
            highPriceRangeList.style.display = "none"
        }
    }

    static handlePriceRange(btn){
        if (btn.innerText === "$"){
            const lowBizPrice = SmallBusiness.all.filter((smallBiz) => {return smallBiz.priceRange === "$"})
            smallBizList.style.display = "none"
            lowPriceRangeList.style.display = "block"
            midPriceRangeList.style.display = "none"
            lowBizPrice.map(lowBiz => {
                lowPriceRangeList.append(lowBiz.addBizToLi())
            })

        } else if (btn.innerText === "$$"){
            const midBizPrice = SmallBusiness.all.filter((smallBiz) => {return smallBiz.priceRange === "$$"})
            smallBizList.style.display = "none"
            lowPriceRangeList.style.display = "none"
            midPriceRangeList.style.display = "block"
            midBizPrice.map(midBiz => {
                midPriceRangeList.append(midBiz.addBizToLi())
            })
        } else if (btn.innerText === "$$$"){
            const highBizPrice = SmallBusiness.all.filter((smallBiz) => {return smallBiz.priceRange === "$$$"})
            smallBizList.style.display = "none"
            lowPriceRangeList.style.display = "none"
            midPriceRangeList.style.display = "none"
            highPriceRangeList.style.display = "block"
            highBizPrice.map(highBiz => {
                highPriceRangeList.append(highBiz.addBizToLi())
            })
        }
    }
}