const axios = require("axios");
const WalmartApiKey = process.env.REACT_APP_WALMART_API_KEY;

module.exports = {
    WalmartFindURL: function(req) {
       return axios({
            "method":"GET",
            "url":"https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"axesso-walmart-data-service.p.rapidapi.com",
            "x-rapidapi-key":WalmartApiKey,
            "useQueryString":true
            },"params":{
            "sortBy":"best_match",
            "page":"1",
            "keyword": req,
            "type":"text"
            }
            }).catch((error)=>{
            console.log(error)
            })
        }
}