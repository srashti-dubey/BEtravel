const mongoose = require ('mongoose');

const hotelSchema = new mongoose.Schema({

    id: Number,
    image: String,
    hotel: String,
    description: String,

})

module.exports=mongoose.model("Hotel",hotelSchema);
