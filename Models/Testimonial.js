import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    name:{type:String,require:true},
    designation:{type:String,require:true},
    imgSrc:{type:String,require:true},
    description:{type:String,require:true},
});

export const Testimonial = mongoose.model("Testimonial",testimonialSchema);