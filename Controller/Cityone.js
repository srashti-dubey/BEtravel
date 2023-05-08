const test = require('../Model/City');

exports.city = async (req, res, next) => {
    let fetchedData = await test.findOne({"id": req.params.id});

    console.log({fetchedData})
    if(fetchedData){
            res.send({data: fetchedData, message:"Data fetched successfully."});
        
    }else{
        console.log("csdcdsc")
        res.status(400).send({message: "No data found."});
    }
}