const express = require('express')
require ("./Connection");
const router=require('./Router/Route')
const app = express()
const jwt = require("jsonwebtoken")
const cors=require("cors")
const port = 5002
app.use(express.json())

app.use(cors({
origin:"http://localhost:3000"
}))
app.use("/",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

router.get("/verifytoken",async (req, res) => {

    try{
  
      if(!req.headers.accesstoken){
  
        throw{msg:"Invalid Header"}
      }
  
      const verified = await verifyToken.verifyToken(req.headers.accesstoken);
  
      res.status(200).send({verified})
  
    }catch(error){
  
        return res.status(400).send({
  
          msg:error.message
       })
  
    }
  
  })




 