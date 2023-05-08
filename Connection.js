const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://srashtidubey27:7qwertyuiop8@cluster0.tofakcd.mongodb.net/?retryWrites=true&w=majority',
// mongoose.connect('mongodb://127.0.0.1:27017/test',

{

}).then(()=>{

    console.log("connection successful");

}).catch((e)=>{

//     console.log("error in connecting with database")
    console.log(e)

})