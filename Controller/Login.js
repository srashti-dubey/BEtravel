const test = require('../Model/Model');
const generateToken=require('../utils/generatetoken');
exports.Login = async (req, res, next) => {
    // console.log("login request data: ", req.body)

    let fetchedData = await test.findOne({"username": req.body.username});
     const generatedtoken = await generateToken.generateToken({username:req.body.username,passward:req.body.passward});

//         console.log(generatedtoken,"1234567890")
    console.log({fetchedData})
    if(fetchedData){
        if(fetchedData.pass==req.body.pass){
            res.send({data: fetchedData, message:"Data fetched successfully.",generatedtoken});
        }
    }else{
        console.log("csdcdsc")
        res.status(400).send({message: "No data found."});
    }
}
