const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  id: Number,
  title: String,
  price: String,
  image: String,
  link: String,
  store: String,
  storeLogo: String
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
