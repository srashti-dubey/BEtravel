const test = require('../Model/City');
const redis = require('../Redis/redisconnect')

exports.city = async (req, res, next) => {
    

  const fetchedData = await redis.getDataFromCacheOrMongoDB("Cities")
   

    // console.log({fetchedData})
    if(fetchedData){
            res.send({data: fetchedData, message:"Data fetched successfully."});
        
    }else{
        console.log("csdcdsc")
        res.status(400).send({message: "No data found."});
    }
}