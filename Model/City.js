const mongoose = require ('mongoose');

const travelSchema = new mongoose.Schema({

    id: Number,
    image: String,
    city: String,
    description: String,

})

module.exports=mongoose.model("Travel",travelSchema);
