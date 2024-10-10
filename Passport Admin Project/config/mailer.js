const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "srraiyani817@gmail.com",
        pass : "upghtqekunvubsfn"
    }
})

module.exports.sendOtp = (to , otp) => {
    let mailOption ={
        user : "srraiyani817@gmail.com",
        to : to,
        subject : "Your OTP is here",
        text : `Your OTP is ${otp}`
    }
    transport.sendMail(mailOption , (err) => {
        err && console.log(err);
    })
}   