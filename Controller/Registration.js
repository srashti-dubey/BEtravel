
const ticket = require('../Model/Ticket');
const User=require("../Model/Model")
const sendEmail=require("../Controller/Verifyemail");

exports.Registration = async (req, res, next) => {
    // console.log("ticket request data: ", req.body)

    let user = await User.findOne({"email": req.body.email});

    console.log("registration api called")

    if(user){
        const create_record = new ticket({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            adults: req.body.adults,
            children: req.body.children,
            departuredate: req.body.departuredate,
            returndate: req.body.returndate,
            from: req.body.from,
            to: req.body.to,
        })
    
        const result = await create_record.save()
        console.log(result)

    if (result) {

        sendEmail.verifymail(req.body.email);
        
        res.send({ result });
    } else {
        res.status(400).send("cant store data");
    }
    }
    else{
        res.status(400).send("Email is not registered")
    }
    
}
