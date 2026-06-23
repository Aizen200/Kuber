const bcyrpt=require("bcrypt")
const User=require("../models/user")
const jwt=require("jsonwebtoken")

const signup= async(req,res)=>{
    const{name,email,password}=req.body
    const findUser= await User.find({
        email:email
    })
    if (findUser){
        return res.status(409).send("User already exist")
    }
    const hashpassword=  await bcyrpt.hash(password,10)
    const newUser= await User.create({
        name:name,
        email:email,
        password:hashpassword
    })
    return res.status(201).json({
        "name":newUser.name,
        "email":newUser.email
    })

}
const login= async(req,res)=>{
    const {email,password}=req.body
    const findUser= await User.find({
        email:email
    })
    if (!findUser){
        return res.status(400).send("User doesn't exist")

    }
    const compare= await bcyrpt.compare(password,findUser.password)
    if (!compare){
        return res.status(400).send("Incorrect password")

    }
    return res.status(200).json({
        "name": findUser.name,
        "email":findUser.email
    })

}
module.exports={login,signup}