const axios = require('axios');

// set up the request parameters
const params = {
  api_key: "2BBB8D2E7D12488CA962C43FD12E91F8",
  type: "product",
  amazon_domain: "amazon.com",
  asin: "B06XWZWYVP"
}

// make the http GET request to Rainforest API
axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {

    // print the JSON response from Rainforest API
    // console.log(JSON.stringify(response.data, 0, 2));
    let product = {
      title: response.data.product.title,
      image: response.data.product.main_image.link,
      price: response.data.product.buybox_winner.price.value,
      link: response.data.product.link
    }


  }).catch(error => {
    // catch and print the error
    console.log(error);
  })