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

    static createSmallBiz(){
        const bizFormData = {
            name: bizNameInput.value,
            price_range: bizPriceRangeInput.value,
            address: bizAddressInput.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(bizFormData)
        }

        fetch(this.smallBizURL, configObj)
        .then(response => response.json())
        .then(bizData => {
            const biz = bizData.data
            const newBusiness = new SmallBusiness({id: biz.id, ...biz.attributes})
            newBusiness.addSmallBizToDom()
        })
    }
    
}
