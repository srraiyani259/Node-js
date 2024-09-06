const express = require("express");
const routes = express.Router();

const adminCtl = require("../controllers/adminCtl")

routes.get("/",adminCtl.index)
routes.get("/edit",adminCtl.edit)

module.exports = routes;