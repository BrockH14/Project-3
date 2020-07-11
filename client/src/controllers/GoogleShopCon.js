// const axios = require("axios");
// const db = require("../models");
// const { useCallback } = require("react");
// const GSR = require('google-search-results-nodejs')
// var request = require('request');
// const GoogleAPIKey = process.env.GOOGLE_API_KEY;
// Defining methods for the Google

// module.exports ={
//   findAll: function(req){
    // const params = {
    //   q: req,
    //   tbm: "shop",
    //   hl: "en",
    //   gl: "us",
    //   location: "United+States",
    //   google_domain: "google.com",
    //   api_key: "3041a39945a9d457dc6aae0d47055f346a9319de765bb7420ed656be212a20f0",
    // }
    // // make the http GET request to Rainforest API
    // return axios.get('https://serpapi.com/search.html?', { params } )


    // //  ('https://serpapi.com/search.html?engine=google&', { params } )
    // return axios.get('https://serpapi.com/search.html?q='+ req +'&tbm=shop&location=United+States&hl=en&gl=us')
    //     .then(response => {
  
    //       // print the JSON response from Rainforest API
    //       // console.log(JSON.stringify(response.data, 0, 2));
  
    //     for (var i = 0; i < 25; i++) {
          
    //       let product = {
    //         title: response.data.shopping_results[i].title,
    //         image: response.data.shopping_results[i].thumbnail,
    //         price: response.data.shopping_results[i].price,
    //         link: response.data.shopping_results[i].link
    //       }
    //       console.log(product)
    //     }
    //     }).catch(error => {
    //       // catch and print the error
    //       console.log(error);
    //     })




    // const GSR = require('google-search-results-nodejs')
    // let client = new GSR.GoogleSearchResults()
    // let result = client.json({
    // api_key: "5bb8393a8c530f502d6caa07a20cf71ce2633be8e84c6bd7fe3d51a9e4bf665f",
    // q: req,            // search query
    // location: "Orlando, FL", // location 
    // }, (data) => {
    //   console.log(data)
    // })

    // var dataString = 'api_key=5bb8393a8c530f502d6caa07a20cf71ce2633be8e84c6bd7fe3d51a9e4bf665f&engine=ebay&ebay_domain=ebay.com&q='+ req;
    
    // var options = {
    //     url: 'https://serpapi.com/search',
    //     method: 'GET',
    //     body: dataString
    // };
    
    // function callback(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body);
    //     }
    // }
    
    // request(options, callback);
    



//   }

// }

