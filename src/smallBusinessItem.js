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
        this.li.dataset.id = this.id

        SmallBusinessItem.all.push(this)
    }

    addLi(li){
        this.li.innerText = `
        <div data-id="${this.id}">
            <span class="small-biz-item-image"><img src="${this.image_url}" alt="${this.name}"></span>
            <strong class="small-biz-item-name">${this.name}</strong>
            <span class="small-biz-item-price">${this.price}</span>
            <span class="small-biz-item-description">${this.description}</span>
            <span class="small-biz-item-product-type">${this.type_of_product}</span>
        </div>
        `
    }
}