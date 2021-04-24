class SmallBusiness {
    static getSmallBusinesses(){
        fetch('http://localhost:3000/small_businesses')
        .then(response => response.json())
        .then(data => console.log(data));
    }
}