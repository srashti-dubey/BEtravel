const test = require('../Model/Hotel');

exports.hotel = async (req, res, next) => {
    let fetchedData = await test.find();

    console.log({fetchedData})
    if(fetchedData){
            res.send({data: fetchedData, message:"Data fetched successfully."});
        
    }else{
        console.log("csdcdsc")
        res.status(400).send({message: "No data found."});
    }
}