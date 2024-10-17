const admin = require("../model/admin");
const bcrypt = require("bcrypt")
const moment = require("moment")

module.exports.addadmin = async (req, res) => {
    let user = await admin.findOne({ email: req.body.email });
    if (user) {
        return res.status(200).json({ msg: "user already exits" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.creaedAT = moment().format('MMMM Do YYYY, h:mm:ss a');
    let data = await admin.create(req.body);
    console.log(req.body);
}

module.exports.loginadmin = async (req , res) => {
    let user = await admin.findOne({})
}