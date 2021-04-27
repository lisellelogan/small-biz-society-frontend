class SmallBusinessItemApi {
    // getSmallBusinesses => make fetch request to /small_businesses_items
    // call renderSmallBusinesses
    
    //use static to call as class method
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

    static createSmallBizItem(){
        const itemFormData = {
            name: bizItemNameInput.value,
            price: bizItemPriceInput.value,
            description: bizItemDescriptionInput.value ,
            type_of_product: bizItemTypeInput.value,
            image_url: bizItemImageUrlInput.value
        }

        const  configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(itemFormData)
        }

        fetch('http://localhost:3000/small_business_items', configObj)
        .then(response => response.json())
        .then(itemData => {
            const item = itemData.data
            const newItem = new SmallBusinessItem({id: item.id, ...item.attributes})
            newItem.addSmallBizItemToDom()
        })
    }
}