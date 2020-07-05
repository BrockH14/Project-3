const axios = require("axios");
module.exports = {
    TargetFind: function(req) {
        axios({
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
            })
            .then(response => {

                // print the JSON response from Rainforest API
                // console.log(JSON.stringify(response.data, 0, 2));
                console.log(response);
              for (var i = 0; i < 25; i++) {
                
                let product = {
                  title: response.data.products[i].title,
                  image: response.data.products[i].images[0].base_url + response.data.products[i].images[0].primary,
                  price: response.data.products[i].price.current_retail,
                  link: "target.com" + response.data.products[i].url
                }
                console.log(product)
              }
              }).catch(error => {
                // catch and print the error
                console.log(error);
              })
        
    }
}