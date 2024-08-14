import { Address } from "../Models/Address.js";

// Add Address

export const addAddress = async (req,res)=>{
    let {fullName,address,city,pinCode,phoneNumber,state,country} = req.body;
    let userId = req.user;
    let userAddress = await Address.create({userId,fullName,address,city,pinCode,phoneNumber,state,country});
    res.json({message: "Address Added",userAddress,success:true});
}


// Get Address

export const getAddress = async (req,res) =>{
    let address = await Address.find({userId:req.user}).sort({createdAt:-1});
    res.json({message:"address",userAddress:address[0]});
};