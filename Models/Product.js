import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {type:String,require:true},
    description: {type:String,require:true},
    shortDescription:{type:String,require:true},
    price: {type:Number,require:true},
    category: {type:String,require:true},
    qty: {type:Number,require:true},
    imgSrc: {type:String,require:true},
    oldPrice: {type:Number,require:true},
    percentOff: {type:Number,require:true},
    size: {type:Array,require:true},
    paymentMethod: {type:String,require:true},
    color: {type:Array,require:true},
    warranty: {type:String,require:true},
    productType:{type:String},
    returnPolicy:{type:String,required:true},
    createdAt: {type:Date,default:Date.now},
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
    ,
});

productSchema.post("findOneAndDelete",async (product)=>{
    if(product){
        await Review.deleteMany({_id: { $in: product.reviews}});
    }
});

export const Product = mongoose.model("Product",productSchema);