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
        this.li.innerText = `Business Name: ${this.name} - Price Range: ${this.price_range} - Address: ${this.address}`
        return this.li
    }

    addSmallBizToDom(){
        smallBizList.append(this.addBizToLi())
    }

}