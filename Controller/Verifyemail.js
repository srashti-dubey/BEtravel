 const nodemailer = require('nodemailer');

 const verifymail =async(email)=>{
      
console.log("verify email working")
const useremail=email;

console.log("jhetalal"+useremail)

let transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{

user:'srashti.dubey27@gmail.com',

pass:'lpbfuotjdryelmpv'

    }
});
let message={

    from:"srashti.dubey27@gmail.com", // sender address

    to:useremail, // list of receivers

    subject: "Booking Successful", // Subject line

    text: "Thankyou for booking with us.", // plain text body

    html: "<b>Thankyou for booking with us.</b> <p>Please share your experience.</p>", // html body
}

transporter.sendMail(message,function(error,info){

    if(error){

        console.log(error);
    }else{
        console.log("email sent successfully")
    }
})
 }
 module.exports={

    verifymail,

 }