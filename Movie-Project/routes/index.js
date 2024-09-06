const express = require("express");
const routes = express.Router();
const multer = require("multer")

const Storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename :(req,file,cb)=>{
        cb(null,file.fieldname+"-"+Date.now())
    }
})

const uploadpic = multer({
    storage : Storage
}).single("image")



const adminCtl = require("../controllers/adminCtl");

routes.get("/", adminCtl.index)
routes.get("/form",adminCtl.form)
routes.post("/insert",uploadpic,adminCtl.insert)
routes.get("/deletemovie",adminCtl.deletemovie)
routes.get("/editdmovie",adminCtl.editdmovie)
routes.post("/updatemovie",uploadpic,adminCtl.updatemovie)


module.exports = routes;    