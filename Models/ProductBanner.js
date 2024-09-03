import mongoose from "mongoose";

const productBannerSchema = new mongoose.Schema({
    title: {type:String,require:true},
    description: {type:String,require:true},
    imgSrc:{type:String,require:true},
    createdAt:{type:Date,default:Date.now()}
});



export const ProductBanner = mongoose.model("ProductBanner",productBannerSchema);