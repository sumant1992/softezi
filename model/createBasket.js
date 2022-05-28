//Amol

const mongoose = require("mongoose");

const CreateBasketSchema = new mongoose.Schema({
  stocks: Number,
  credits: Number,
  pioneers: [
    {
      selectedBy: String,
      credits: Number,
      LTP: Number,
    },
  ],
  leaders: [
    {
      selectedBy: String,
      credits: Number,
      LTP: Number,
    },
  ],
  movers: [
    {
      selectedBy: String,
      credits: Number,
      LTP: Number,
    },
  ],
  gainers: [
    {
      selectedBy: String,
      credits: Number,
      LTP: Number,
    },
  ],
});
module.exports = mongoose.model("createBasket", CreateBasketSchema);
// stockDetails: [
//   {
//     selectedBy: String,
//     credits: Number,
//     LTP: Number,
//     category: String,
//     tab: String,
//   },
// ],