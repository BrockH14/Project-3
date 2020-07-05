const axios = require("axios");
const db = require("../models");
const GoogleAPIKey = process.env.GOOGLE_API_KEY;
// Defining methods for the Google

module.exports ={
  findAll: function(req){
    
    axios({
      "method":"GET",
      "url":"http://google-shopping.p.rapidapi.com/search",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"google-shopping.p.rapidapi.com",
      "x-rapidapi-key": "a60de64e9amshbc8b025a1d49262p15a2afjsn89c21e842c0c",
      "useQueryString":true
      },"params":{
      "language":"EN",
      "keywords": req,
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

