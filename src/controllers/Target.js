const axios = require("axios");
// import TargetApiKey from "../../server"
const TargetApiKey = process.env.REACT_APP_TARGET_API_KEY;
module.exports = {
    TargetFind: function(req) {
        return axios({
            "method":"GET",
            "url":"https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/search",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"target-com-store-product-reviews-locations-data.p.rapidapi.com",
            "x-rapidapi-key":TargetApiKey,
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