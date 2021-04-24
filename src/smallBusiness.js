class SmallBusiness {

    static small_businesses = []

    constructor({id, name, price_range, address}){
        this.id = id
        this.name = name
        this.price_range = price_range
        this.address = address

        SmallBusiness.small_businesses.push(this)
    }
}