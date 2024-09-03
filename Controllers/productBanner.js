import { ProductBanner } from "../Models/ProductBanner.js";

// addProduct
export const addProduct = async(req,res)=> {
    const {title,description,imgSrc} = req.body;
    try {
        let product = await ProductBanner.create({title,description,imgSrc});
        console.log(product);
        res.json({message:"ProductBanner added Successfully....",product});
    } catch (error) {
        res.json(message.error)
    }
}

// getProduct

export const getProduct = async(req,res)=>{
    try {
        let products = await ProductBanner.find().sort({createdAt:-1});
        res.json({message:"All Banner Products",products})
    } catch (error) {
        throw error
    }
}

// get Product By Id
// export const getProductById = async(req,res)=>{
//     try {
//         const id = req.params.id;
//         let product = await Product.findById(id);
//         if(!product) return res.json({message:"Invalid Id",success:false})
//         res.json({message:"Specific Product",product})
//     } catch (error) {
//         throw error
//     }
// }

// Update Product By Id
export const updateProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        let product = await ProductBanner.findByIdAndUpdate(id,req.body,{new:true});
        if(!product) return res.json({message:"Invalid Id",success:false})
        res.json({message:"ProductBanner Has been Updated",product})
    } catch (error) {
        throw error
    }
}

// Update Product By Id
export const deleteProductById = async(req,res)=>{
    try {
        const id = req.params.id;
        let product = await ProductBanner.findByIdAndDelete(id);
        if(!product) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Product Banner Has been Deleted",product})
    } catch (error) {
        throw error
    }
}