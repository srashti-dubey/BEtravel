const mongoose = require ('mongoose');

const hotelimage = new mongoose.Schema({

    // id: Number,
    image: [],
    // hotel: String,
    // description: String,

})

module.exports=mongoose.model("hotelimage",hotelimage);