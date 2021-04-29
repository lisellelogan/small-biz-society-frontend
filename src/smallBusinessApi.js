class SmallBusinessApi {

    static smallBizURL = 'http://localhost:3000/small_businesses'
    
    static getSmallBusinesses(){
        fetch(this.smallBizURL)
        .then(response => response.json())
        .then(json => {
            json.data.forEach(smallBusiness => {
                const newBiz = new SmallBusiness({id: smallBusiness.id, ...smallBusiness.attributes})
                newBiz.addSmallBizToDom()
            });
        })
    }
    
}
