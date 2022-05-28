const mongoose = require("mongoose")

const bannerSchema = new mongoose.Schema({
    bannerImage: String,
    bannerRank: String
})

module.exports = mongoose.model("banners", bannerSchema)