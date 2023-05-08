const express = require('express');
const controller = require('../Controller/Signup');
const usernameSchema = require('../Model/Model')
const controllerone = require('../Controller/Login');
const verifyToken = require('../utils/verifytoken');
const controllertwo = require('../Controller/Registration');
const ticketSchema = require('../Model/Ticket');
const travelSchema = require('../Model/City');
const controllercity = require('../Controller/Travel')
const controllercityone = require('../Controller/Cityone')
const controllergetall = require('../Controller/Citygetall')
const controllerhotel = require('../Controller/Hotel')
const hotelSchema = require('../Model/Hotel')
const controllerhotelgetall = require('../Controller/Hotelgetall')
const controllerhotelone = require('../Controller/Hotelone')
const controllerhotelimage = require('../Controller/Hotelimage')



const router = express.Router();

router.post("/insert", async (req, res) => {
    controller.Signup(req, res);
})

router.post("/insert1", async (req, res) => {
    controllerone.Login(req, res);
})

router.post("/register", async (req, res) => {
    // console.log({ req })
    controllertwo.Registration(req, res);
})

router.post("/City", async (req, res) => {
    console.log({ req })
    controllercity.Travel(req, res);
})

router.get("/Cityone/:id", async (req, res) => {
    console.log(req.params.id,"city one api wokring")
    controllercityone.city(req, res);
})

router.get("/Citygetall", async (req, res) => {
    console.log("getting city get all request")
    controllergetall.city(req, res);
})

router.post("/Hotel", async (req, res) => {
    console.log({ req })
    controllerhotel.Hotel(req, res);
})
router.get("/Hotelone/:id", async (req, res) => {
    // console.log({ req })
    console.log("iam oknpm")
    controllerhotelone.hotelone(req, res);
})
router.get("/Hotelgetall", async (req, res) => {
    console.log({ req })
    controllerhotelgetall.hotel(req, res);
})

router.post("/Hotelimage", async (req, res) => {
    console.log({ req })
    controllerhotelimage.hotelimage(req, res);
})

router.get("/Hotelimageall", async (req, res) => {
    console.log({ req })
    controllerhotelimage.hotelimageall(req, res);
})

router.get("/verifyemail",(req,res)=>{

        res.render('verifyemail',{title:'Verify Email'});
    
    });

router.get("/verifytoken", async (req, res) => {
    try{
      if(!req.headers.accesstoken)
       { console.log("token not found")
       
          throw{msg:"Inavlid hearder"}
       }
       console.log(req.headers)
         const verified=await verifyToken.verifyToken(req.headers.accesstoken)
         console.log(verified,"ajit")
        res.status(200).send({verified})
    }catch(err){
       res.status(400).send({msg:err.message})
    }
  })

module.exports = router