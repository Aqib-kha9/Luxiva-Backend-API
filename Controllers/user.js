import {User} from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{
    const {name,email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user){
            return res.json({message:"User Already Exist", success: false});
        }
        const hashPass = await bcrypt.hash(password,10)
        user = await User.create({name,email,password:hashPass});
        console.log(user);
        res.json({message:"user registered successfully....", user,success: true})
    } catch (error) {
        res.json({message:error.message});
    }
}


// Login

export const login = async (req,res)=>{
    const {email,password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) return res.json({message: "user not Find",success: false});
            const validPassword = await bcrypt.compare(password,user.password);
        if(!validPassword) return res.json({message: "Invalid Credential",success: false});

        const token = jwt.sign({userId:user._id},"&@*!@^@#()$",{
            expiresIn: "20d"
        })

        res.json({message:`Welcome ${user.name}`, token, success: true,});
    } catch (error) {
        res.json({message: error.message})
    }
};


// get All Users

export const users = async (req,res)=>{
    try {
        let user = await User.find().sort({createdAt:-1});
        res.json(user);
    } catch (error) {
        res.json(error.message);
    }
};


// Get user Profile

export const getProfile = async (req,res)=>{
    res.json({user:req.user});
};