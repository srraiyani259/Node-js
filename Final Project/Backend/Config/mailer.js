const nodemailer = require("nodemailer");

const trasnsport = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "srraiyani817@gmail.com",
        pass : "hviqbhagyzpckens"
    }
})
module.exports.sendotp = (to,otp)=>{
    let mailoption ={
        from : "srraiyani817@gmail.com",
        to : to,
        subjet : "Here is your otp",
        text : `your otp is ${otp}`
    }
    trasnsport.sendMail(mailoption,(err)=>{
        err && console.log(err);
    })
}