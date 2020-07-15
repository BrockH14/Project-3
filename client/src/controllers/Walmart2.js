const axios = require("axios");
// import WalmartApiKey from "../../server"
const WalmartApiKey = process.env.REACT_APP_WALMART_API_KEY;

module.exports = {
    WalmartFind: function(req) {
        return axios({
            "method":"GET",
            "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
            "x-rapidapi-key":WalmartApiKey,
            "useQueryString":true
            },"params":{
            "url": "https://www.walmart.com" + req
            }
            }).catch((error)=>{
            console.log(error)
            })
    }
}