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
        if (e.target.innerText === 'edit this'){
            e.target.innerText = "update"
            this.editItemForm(e.target)
        } else if (e.target.innerText === 'delete this'){
            this.deleteBizItem(e)
        } else if (e.target.innerText === 'update'){
            e.target.innerText = 'edit this'
            this.updateBizItem(e.target.parentElement)
        }
    }

    editItemForm = (btn) => {
        const editLi = btn.parentElement
        const editDiv = btn.parentElement.firstElementChild
        
        const name = editLi.querySelector('.small-biz-item-name').innerText
        const price = editLi.querySelector('.small-biz-item-price').innerText
        const description = editLi.querySelector('.small-biz-item-description').innerText
        const typeOfProduct = editLi.querySelector('.small-biz-item-product-type').innerText
        const imgUrl = editLi.querySelector('.small-biz-item-image').innerText

        editDiv.innerHTML = `
        Name: <input type="text" name="name" class="update-item-name" value="${name}"></input><br>
        Price: <input type="float" name="price" class="update-item-price" value="${price}"></input><br>
        Description: <input type="text" name="description" class="update-item-description" value="${description}"></input><br>
        Type of Product: <input type="text" name="type_of_product" class="update-item-type-of-product" value="${typeOfProduct}"></input><br>
        Image URL: <input type="text" name="image_url" class="update-item-image-url" value="${imgUrl}"></input><br>
        `
    }

    deleteBizItem = (e) => {
        if (window.confirm('Are you sure you want to delete this?')){
            this.li.remove()
            SmallBusinessItemApi.deleteSmallBizItem(this.id)
        }
    }

    updateBizItem(editLi){
        const name = editLi.querySelector('.update-item-name').value
        const price = editLi.querySelector('.update-item-price').value
        const description = editLi.querySelector('.update-item-description').value
        const typeOfProduct = editLi.querySelector('.update-item-type-of-product').value
        const imgUrl = editLi.querySelector('.update-item-image-url').value

        debugger
        SmallBusinessItemApi.patchItem()
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