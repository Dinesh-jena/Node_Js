const { default: mongoose } = require("mongoose");
const userModel = require('../models/auth.models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

async function userRegister(req,res){
    const {username,password} = req.body;

    const isUser= await userModel.findOne({username});

    if(isUser){
        return res.status(400).json({
            message:"User alredy exits"
        })
    }

    const user = await userModel.create({
        username,
        password:await bcrypt.hash(password,10)
    });

    const token = jwt.sign({id : user._id},process.env.JWT_SECRET);

    res.cookie("token",token);

    // console.log(req.cookies.token);

    res.status(201).json({message:"User create sucessfully"});

}

async function userLogin(req,res){
    const {username,password} = req.body;

    const isUser= await userModel.findOne({username:username});

    if(!(isUser)){
        return res.status(400).json({
            message:"Unaurthorized User",
        })
    }

    const isPasswordValid = await bcrypt.compare(password,isUser.password);
    
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid Password"});
    }

    const token = jwt.sign({id:isUser._id},process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message:"User Logged in Succesfully",
        isUser:{
              username: isUser.username,
              id:isUser._id
        }
    })
}

module.exports = {
    userRegister,
    userLogin
}