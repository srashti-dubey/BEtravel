const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test',

{

}).then(()=>{

    console.log("connection successful");

}).catch((e)=>{

//     console.log("error in connecting with database")
    console.log(e)

})