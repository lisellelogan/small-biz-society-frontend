class SmallBusinessItemApi {

    static itemsURL = 'http://localhost:3000/small_business_items'
    // getSmallBusinesses => make fetch request to /small_businesses_items
    // call renderSmallBusinesses
    
    //use static to call as class method
    static getSmallBusinessesItems(){
        fetch(this.itemsURL)
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

        fetch(this.itemsURL, configObj)
        .then(response => response.json())
        .then(itemData => {
            const item = itemData.data
            const newItem = new SmallBusinessItem({id: item.id, ...item.attributes})
            newItem.addSmallBizItemToDom()
        })
    }

    static patchItem(bizItem){
        let {name, price, description, type_of_product, image_url} = bizItem

        const bizItemInfo = {
            name,
            price,
            description,
            type_of_product,
            image_url
        }

        const  configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(bizItemInfo)
        }

        fetch(`${this.itemsURL}/${bizItem.id}`, configObj)
        .then(response => response.json())
        .then(itemData => {
            bizItem.addToLi()
        })
    }

    static deleteSmallBizItem(id){
        const  configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        }

        fetch(`${this.itemsURL}/${id}`, configObj)
        .then(response => response.json())
        .then(itemData => {
            alert(itemData.message)
        })
    }
}