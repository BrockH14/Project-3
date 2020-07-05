const axios = require('axios');

// set up the request parameters

module.exports = {
  AmazonFind: function(req) {
    
    const params = {
      api_key: "2BBB8D2E7D12488CA962C43FD12E91F8",
      type: "search",
      amazon_domain: "amazon.com",
      search_term: req, //search term will be edited with user input
      sort_by: 'average_review'
    }
    // make the http GET request to Rainforest API
    return axios.get('https://api.rainforestapi.com/request', { params })
      .then(response => {

        // print the JSON response from Rainforest API
        // console.log(JSON.stringify(response.data, 0, 2));
        console.log(response);
      for (var i = 0; i < 25; i++) {
        
        let product = {
          title: response.data.search_results[i].title,
          image: response.data.search_results[i].image,
          price: response.data.search_results[i].prices[0].raw,
          link: response.data.search_results[i].link
        }
        console.log(product)
      }




      }).catch(error => {
        // catch and print the error
        console.log(error);
      })

      
  }
}

  