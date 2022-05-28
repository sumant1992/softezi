const mongoose = require('mongoose')

module.exports.Otp = new mongoose.model('otp', mongoose.Schema({
    number : {
        type : String,
        require : true
    },
    otp : {
        type : String,
        require : true
    },
    createdAt : {type : Date, default : Date.now, index : {expires: 300}}

    // after five minit it will be deleted automatically
}, {timestamps : true}))