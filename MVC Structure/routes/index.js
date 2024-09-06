const express = require("express");
const routes = express.Router();

const adminCtl = require("../controllers/adminCtl")

routes.get("/",adminCtl.form)
routes.get("/home",adminCtl.home)
routes.get("/about",adminCtl.about)

module.exports = routes;