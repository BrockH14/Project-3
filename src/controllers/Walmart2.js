const axios = require("axios");

module.exports = {
    WalmartFind: function(req) {
        return axios({
            "method":"GET",
            "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
            "x-rapidapi-key":"a60de64e9amshbc8b025a1d49262p15a2afjsn89c21e842c0c",
            "useQueryString":true
            },"params":{
            "url": "https://www.walmart.com" + req
            }
            })
            .then((response)=>{
            return response
            })
            .catch((error)=>{
            console.log(error)
            })
    }
}