const mongoose = require ('mongoose');

const ticketSchema = new mongoose.Schema({

    name: String,
    email: String,
    phone: String,
    adults: Number,
    children: Number,
    departuredate: Date,
    returndate: Date,
    from: String,
    to: String,

})

module.exports=mongoose.model("Ticket",ticketSchema);
