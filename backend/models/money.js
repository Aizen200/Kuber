const mongoose=require("mongoose")
const moneySchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true
    },
    income:{
        type:Number,
        require:true

    }
})
module.exports= mongoose.model("Money",moneySchema)