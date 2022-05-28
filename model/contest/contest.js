const mongoose = require('mongoose')

const shareSchema = new mongoose.Schema({

    shareDate :  String,

    startDate : String,

    endDate :  String,

    endTime :  String,

    day : String,
  
    
    contestType : [],
    
    price : Number
})

module.exports = mongoose.model('contests', shareSchema)