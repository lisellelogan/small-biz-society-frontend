class SmallBusinessApi {

    // getSmallBusinesses => make fetch request to /small_businesses
    // call renderSmallBusinesses
    static smallBusinessesURL = 'http://localhost:3000/small_businesses'
    
    static getSmallBusinesses(){
        fetch(this.smallBusinessesURL)
        .then(response => response.json())
        .then(json => {
            debugger
            json.data.forEach(smallBusiness => {
                const newBiz = new SmallBusiness({id: smallBusiness.id, name: smallBusiness.name, price_range: smallBusiness.price_range, address: smallBusiness.address})
            });
        })
    }

    renderSmallBusinesses(){
        //create DOM nodes and insert data into nodes to display in the DOM
    }
}
