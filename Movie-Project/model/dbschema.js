const mongoose = require("mongoose")

const crud= mongoose.Schema(
    {
        image :{
            type : String,
            required :true

        },
        name : {
            type : String ,
            required : true
        },
        movietype : {
            type : String , 
            require : true
        },
        rating : {
            type : Number,
            require : true
        }

        
    }
)

const crudtab = mongoose.model("PRC",crud);

module.exports = crudtab;