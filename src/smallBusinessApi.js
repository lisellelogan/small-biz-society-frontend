class SmallBusinessApi {
    
    static getSmallBusinesses(){
        fetch('http://localhost:3000/small_businesses')
        .then(response => response.json())
        .then(json => {
            json.data.forEach(smallBusiness => {
                const newBiz = new SmallBusiness({id: smallBusiness.id, ...smallBusiness.attributes})
                newBiz.addSmallBizToDom()
            });
        })
    }

    renderSmallBusinesses(){
        //create DOM nodes and insert data into nodes to display in the DOM
    }
}
