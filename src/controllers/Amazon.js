const axios = require('axios');

// set up the request parameters

module.exports = {
  AmazonFind: function(req) {
    
    const params = {
      api_key: "A510E407AB624CB79E1B1EB2AC38C2D7",
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

  