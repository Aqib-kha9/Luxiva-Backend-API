import { Product } from "../Models/Product.js";

// addProduct
export const addProduct = async(req,res)=> {
    const {title,description,price,category,qty,imgSrc,oldPrice,percentOff,size,paymentMethod,color,warranty,productType,shortDescription,returnPolicy} = req.body;
    try {
        let product = await Product.create({title,description,price,category,qty,imgSrc,oldPrice,percentOff,size,paymentMethod,color,warranty,productType,shortDescription,returnPolicy});
        console.log(product);
        res.json({message:"Product added Successfully....",product});
    } catch (error) {
        res.json(message.error)
    }
}

// getProduct

export const getProduct = async(req,res)=>{
    try {
        let products = await Product.find().sort({createdAt:-1});
        res.json({message:"All Products",products})
    } catch (error) {
        throw error
    }
}

// get Product By Id
export const getProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        let product = await Product.findById(id);
        if(!product) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Specific Product",product})
    } catch (error) {
        throw error
    }
}

// Update Product By Id
export const updateProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        let product = await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!product) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Product Has been Updated",product})
    } catch (error) {
        throw error
    }
}

// Update Product By Id
export const deleteProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        let product = await Product.findByIdAndDelete(id);
        if(!product) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Product Has been Deleted",product})
    } catch (error) {
        throw error
    }
}