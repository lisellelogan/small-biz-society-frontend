class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        this.li = document.createElement("li")
        this.li.id = `small-biz-${this.id}`

        this.li,addEventListener('click', this.handleClick)

        SmallBusiness.all.push(this)
    }

    handleClick = (e) => {
        if (e.target.innerText === 'edit this'){
            e.target.innerText = 'update'
            this.editBizForm(e.target)
        } else if (e.target.innerText === 'delete this'){
            this.deleteBiz(e)
        } else if (e.target.innerText === 'update'){
            e.target.innerText = 'edit this'
        }
    }

    editBizForm = (btn) => {
        const editLi = btn.parentElement
        const editDiv = btn.parentElement.firstElementChild
        
        const name = editLi.querySelector('.small-biz-name').innerText
        const priceRange = editLi.querySelector('.small-biz-price-range').innerText
        const address = editLi.querySelector('.small-biz-address').innerText
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
            Price Range: $<span class="small-biz-price-range">${this.price_range}</span><br>
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