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
        //do a find or create by to avoid any reoccurring data
        //if small biz name === input name => find small biz and show them their page
        //else create small biz
    }
}
