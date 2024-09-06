const mongoose = require("mongoose");

const crud = mongoose.Schema(
    {
       
    }
);

const crudtable = mongoose.model("crud",crud)

module.exports = crudtable