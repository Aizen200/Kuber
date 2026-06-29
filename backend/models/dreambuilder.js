const mongoose=require("mongoose")
const dreambuilderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    monthly_target:{
        type:Number,
        required:true

    }
})
module.exports= mongoose.model("DreamBuilder",dreambuilderSchema)
