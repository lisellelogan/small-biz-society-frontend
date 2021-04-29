class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        this.li = document.createElement("li")
        this.li.id = `small-biz-${this.id}`


        SmallBusiness.all.push(this)
    }

    addBizToLi(){
        // this.li.innerText = `Business Name: ${this.name} - Price Range: ${this.price_range} - Address: ${this.address}`
        // return this.li
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