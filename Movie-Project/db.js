const mongoose = require("mongoose");

const db=mongoose.connect("mongodb://127.0.0.1/Movie-Project")
.then(()=> console.log("MongoDb Connected"))
.catch((err)=>  console.log(err))

module.exports = db;
