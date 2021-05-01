class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        this.li = document.createElement("li")
        this.li.id = `small-biz-${this.id}`

        this.li.addEventListener('click', this.handleClick)

        SmallBusiness.all.push(this)
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
        if (!this.findBizByName){
            alert("unable to find you. please try again!")
        } else {
            this.findBizByName
        }
    }

    static findBizByName(){
        const loginName = loginForm.querySelector('#login-biz-name').value
        SmallBusiness.all.forEach(smallBiz => {
            if (loginName.toLowerCase() === smallBiz.name.toLowerCase()){
                landingPage.style.display = "none"
                smallbizsocietyContent.style.display = "block"
            }
        })
    }

    static handleJoinClick(){
        joinBtn.remove()
        smallBizForm.style.display = "block"

        loginForm.style.display = "none"
        landingPage.append(loginBtn)
        loginBtn.addEventListener('click', this.handleLoinClick)

        smallBizForm.addEventListener('submit', this.handleJoinSubmit)
    }

    static handleJoinSubmit(e){
        e.preventDefault()
        SmallBusinessApi.createSmallBiz()
        landingPage.style.display = "none"
        smallbizsocietyContent.style.display = "block"
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
        this.price_range = editLi.querySelector('.update-biz-price-range').value
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
            Price Range: <span class="small-biz-price-range">${this.price_range}</span><br>
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

}