class SmallBusinessItem {

    //use static to specify is class variable
    static all = []

    constructor({id, name, price, description, image_url, type_of_product, small_business_id}){
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.image_url = image_url
        this.type_of_product = type_of_product
        this.small_business_id = small_business_id

        //makes it a property of object
        this.li = document.createElement('li')
        this.li.id = `small-biz-item-${this.id}`

        this.li.addEventListener('click', this.handleClick)

        SmallBusinessItem.all.push(this)
    }

    handleClick = (e) => {
        debugger
        if (e.target.innerText === 'edit this'){
            e.target.innerText = "update"
        } else if (e.target.innerText === 'delete this'){
            this.deleteBizItem(e)
        } else if (e.target.innerText === 'update'){
            this.updateBizItem()
        }
    }

    deleteBizItem = (e) => {
        if (window.confirm('Are you sure you want to delete this?')){
            this.li.remove()
            SmallBusinessItemApi.deleteBizItem(this.id)
        }
    }

    updateBizItem(){

    }

    addToLi(){
        this.li.innerHTML = `
        <div data-id="${this.id}">
            <span class="small-biz-item-image"><img src="${this.image_url}" alt="${this.name}"></span><br>
            <strong class="small-biz-item-name">${this.name}</strong><br>
            Price: $<span class="small-biz-item-price">${this.price}</span><br>
            Description: <span class="small-biz-item-description">${this.description}</span><br>
            Type of Product: <span class="small-biz-item-product-type">${this.type_of_product}</span><br>
        </div>
        <button class="edit" data-id="${this.id}">edit this</button>
        <button class="delete" data-id="${this.id}">delete this</button>
        <br><br>
        `
        return this.li
    }

    addSmallBizItemToDom(){
        smallBizItemList.append(this.addToLi())
    }
}