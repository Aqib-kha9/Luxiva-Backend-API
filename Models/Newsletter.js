import mongoose from "mongoose";

const newsLetter = new mongoose.Schema({
    email:{type:String,require:true},
    createdAt:{type:Date,default:Date.now()}
});

export const NewsLetter = mongoose.model("NewsLetter",newsLetter);