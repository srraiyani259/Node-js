const express = require("express");
const routes = express.Router();
const adminctl = require("../controller/adminctl");

routes.post("/addadmin",adminctl.addadmin)
routes.post("/loginadmin",adminctl.loginadmin)


module.exports = routes;    