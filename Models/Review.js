import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    comment: String,
    rating:{
        type: Number,
        min:1,
        max:5,
    },
    imgSrc:{type:String},
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    name:{type:String},
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

});



export const Review = mongoose.model("Review",reviewSchema);
