const axios = require("axios");
const db = require("../models");
const GoogleAPIKey = process.env.GOOGLE_API_KEY
// Defining methods for the Google

module.exports ={
  findAll: function(req, res){
    const {query: params } = req;
    axios({
      "method":"GET",
      "url":"https://google-shopping.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"google-shopping.p.rapidapi.com",
      "x-rapidapi-key": GoogleAPIKey,
      "useQueryString":true
      },"params":{
      "language":"EN",
      "keywords": params,
      "country":"US"
      }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

}

