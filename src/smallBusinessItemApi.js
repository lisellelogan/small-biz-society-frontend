class SmallBusinessItemApi{
    // getSmallBusinesses => make fetch request to /small_businesses_items
    // call renderSmallBusinesses
    
    static getSmallBusinesses(){
        fetch('http://localhost:3000/small_business_tems')
        .then(response => response.json())
        .then(json => {
            json.data.forEach(smallBusinessItem => {
                const newBizItem = new SmallBusinessItem({id: smallBusinessItem.id, ...smallBusinessItem.attributes})
            });
        })
    }
}