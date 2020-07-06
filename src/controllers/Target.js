const axios = require("axios");
module.exports = {
    TargetFind: function(req) {
        return axios({
            "method":"GET",
            "url":"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"target-com-store-product-reviews-locations-data.p.rapidapi.com",
            "x-rapidapi-key":"a60de64e9amshbc8b025a1d49262p15a2afjsn89c21e842c0c",
            "useQueryString":true
            },"params":{
            "sponsored":"1",
            "limit":"20",
            "offset":"0",
            "store_id":"3991",
            "keyword":req
            }
            }).catch(error => {
                // catch and print the error
                console.log(error);
              })
        
    }
}