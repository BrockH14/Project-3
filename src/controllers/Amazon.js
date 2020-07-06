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
      .catch(error => {
        // catch and print the error
        console.log(error);
      })

      
  }
}

  