const mongoose = require("mongoose");

const crud = mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true   
        },
        password : {
            type : String,
            required : true
        },
        gender : {
            type : String,
            required : true
        },
        hobby : {
            type : Array,
            required : true
        },
    }
);

const crudtable = mongoose.model("data",crud)

module.exports = crudtable  