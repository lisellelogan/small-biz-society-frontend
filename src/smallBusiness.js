class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        this.li = document.createElement("li")

        SmallBusiness.all.push(this)
    }

    addSmallBizToDom(){
        this.li.innerText = `Business Name: ${this.name} - Price Range: ${this.price_range} - Address: ${this.address}`
        smallBizList.append(this.li)
    }

    //make function where you click on add small biz button and form appears

}