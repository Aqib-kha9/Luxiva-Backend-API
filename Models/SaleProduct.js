import mongoose from "mongoose";

const saleProductSchema = new mongoose.Schema({
    title: {type:String,require:true},
    description: {type:String,require:true},
    imgSrc:{type:String,require:true},
    createdAt:{type:Date,default:Date.now()}
});



export const SaleProduct = mongoose.model("SaleProduct",saleProductSchema);