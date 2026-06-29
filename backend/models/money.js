const mongoose=require("mongoose")
const moneySchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    income:{
        type:Number,
        required:true

    }
})
module.exports= mongoose.model("Money",moneySchema)