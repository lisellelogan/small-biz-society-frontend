class SmallBusinessItemApi {
    // getSmallBusinesses => make fetch request to /small_businesses_items
    // call renderSmallBusinesses
    
    static getSmallBusinessesItems(){
        fetch('http://localhost:3000/small_business_items')
        .then(response => response.json())
        .then(json => {
            json.data.forEach(smallBusinessItem => {
                const newBizItem = new SmallBusinessItem({id: smallBusinessItem.id, ...smallBusinessItem.attributes})
                newBizItem.addSmallBizItemToDom()
            });
        })
    }
}