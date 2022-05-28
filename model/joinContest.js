// AMOl

const mongoose = require("mongoose");

//--------Create schema (format) for model

const contastSchema = new mongoose.Schema({
  contest: [
    {
      prizePool: Number,
      entry: Number,
      spots: Number,
      firstPrize: Number,
      teamsWin: String,
      joinTeams: String,
      categore: Boolean,
    },
  ],
  joinContest: [
    {
      prizePool: Number,
      timeLeft: String,
      contestFee: Number,
      spots: Number,
    },
  ],
});
module.exports = mongoose.model("joincontest", contastSchema);