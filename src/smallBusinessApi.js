class SmallBusinessApi {

    static bizURL = 'http://localhost:3000/small_businesses'
    
    static getSmallBusinesses(){
        fetch(this.bizURL)
        .then(response => response.json())
        .then(json => {
            json.data.forEach(smallBusiness => {
                const newBiz = new SmallBusiness({id: smallBusiness.id, ...smallBusiness.attributes})
                newBiz.addSmallBizToDom()
                newBiz.addBizToDropdown()
            });
        })
    }

    static findOrCreateSmallBiz(smallBiz){

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(smallBiz)
        }

        fetch(this.bizURL, configObj)
        .then(response => response.json())
        .then(bizData => {
            const biz = bizData.data
            const newBusiness = new SmallBusiness({id: biz.id, ...biz.attributes})
            newBusiness.addSmallBizToDom()
        })
    }

    static patchBiz(biz){
        let {name, price_range, address} = biz

        const bizInfo = {
            name,
            price_range,
            address
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(bizInfo)
        }

        fetch(`${this.bizURL}/${biz.id}`, configObj)
        .then(response => response.json())
        .then(bizData => {
            biz.addBizToLi()
        })
    }

    static deleteSmallBiz(id){
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json'
            }
        }

        fetch(`${this.bizURL}/${id}`, configObj)
        .then(response => response.json())
        .then(bizData => {
            alert(bizData.message)
        })
    }
    
}
