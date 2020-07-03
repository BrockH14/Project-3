const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "2BBB8D2E7D12488CA962C43FD12E91F8",
  type: "search",
  amazon_domain: "amazon.com",
  search_term: 'memory card', //search term will be edited with user input
  sort_by: 'average_review'
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {

    // print the JSON response from Rainforest API
    // console.log(JSON.stringify(response.data, 0, 2));

    
     let product = {
       title: response.data.search_results[0].title,
       image: response.data.search_results[0].image,
       price: response.data.search_results[0].prices[0].raw,
       link: response.data.search_results[0].link
     }

    console.log(product)



  }).catch(error => {
    // catch and print the error
    console.log(error);
  })

  