const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({

    referalcode : {
        type : String,
    },
    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true
        
    },
    mobile : {
        type : Number,
        unique : true
    },
    address : {
        type : String
    },
    pan : {
        type : String
    },
    dob : {
        type : String
    },
    followers : {
        type : Array,
        default : []
    },
    followings : {
        type : Array,
        default : []
    },
    friends : {
        type : Array,
        default : []
    }
})

module.exports  = mongoose.model('users', userSchema)