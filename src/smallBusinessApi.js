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

    static createSmallBiz(){
        const smallBizFormData = {
            name: bizNameInput.value,
            price_range: bizPriceRangeInput.value,
            address: bizAddressInput.value 
        }

        const  configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(smallBizFormData)
        }

        fetch('http://localhost:3000/small_businesses', configObj)
        .then(response => response.json())
        .then(bizData => {
            console.log(bizData)
        })
    }
}
