const mongoose = require ('mongoose');

const usernameSchema = new mongoose.Schema({

email: String,

username: String,

pass: String,


})

module.exports=mongoose.model("User",usernameSchema);
