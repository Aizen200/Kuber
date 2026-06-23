const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app= express()
dotenv.config()
app.use(express.json())
app.use(cors())
mongoose.connect(process.env.mongo_uri)
.then(()=>console.log("Mongodb Connected")).catch((err)=>console.log(err))

app.get("/",(req,res)=>{
    res.status(200).send("Server running")
})
app.listen(3000,()=>{
    console.log("Server running")
})