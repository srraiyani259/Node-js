module.exports.index = (req , res)=>{
    res.render("index")
}

module.exports.edit = async(req , res)=>{
    try{
        await res.render("edit")
    }
    catch(err){
        console.log("error found while rendering edit" + err);
    }
}