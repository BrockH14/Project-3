const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  post_date: { type: Date, default: Date.now }
});

const Saved = mongoose.model("Saved", savedSchema);

module.exports = Saved;
