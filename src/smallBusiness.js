class SmallBusiness {

    static all = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        const li = document.createElement("li")

        SmallBusiness.all.push(this)
    }

    displayOnDom(){
        this.li.innerText = `${this.name} - Address: ${this.address} - Price Range: ${this.price_range}`
    }
}