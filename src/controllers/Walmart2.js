const axios = require("axios");

module.exports = {
    WalmartFind: function(req) {
        return axios({
            "method":"GET",
            "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
            "x-rapidapi-key":"7c1420d017mshe6508c373b28efap1c3cc9jsn09b491aa2128",
            "useQueryString":true
            },"params":{
            "url": "https://www.walmart.com" + req
            }
            }).catch((error)=>{
            console.log(error)
            })
    }
}