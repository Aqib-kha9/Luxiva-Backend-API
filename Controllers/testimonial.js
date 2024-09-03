import { Testimonial } from "../Models/Testimonial.js";

// add Testimonial
export const addtestimonial = async(req,res)=> {
    const {name,description,imgSrc,designation} = req.body;
    try {
        let testimonial = await Testimonial.create({name,description,imgSrc,designation});
        console.log(testimonial);
        res.json({message:"Product added Successfully....",testimonial});
    } catch (error) {
        res.json(message.error)
    }
}


// getProduct

export const getTestimonial = async(req,res)=>{
    try {
        let testimonial = await Testimonial.find().sort({createdAt:-1});
        res.json({message:"All Testimonials",testimonial})
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
export const updateTestimonialById = async(req,res)=>{
    try {
        const id = req.params.id;
        let testimonial = await Testimonial.findByIdAndUpdate(id,req.body,{new:true});
        if(!testimonial) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Testimonial Has been Updated",testimonial })
    } catch (error) {
        throw error
    }
}

// Delete Product By Id
export const deleteTestimonialById = async(req,res)=>{
    try {
        const id = req.params.id;
        let testimonial = await Testimonial.findByIdAndDelete(id);
        if(!testimonial) return res.json({message:"Invalid Id",success:false})
        res.json({message:"Product Banner Has been Deleted",testimonial})
    } catch (error) {
        throw error
    }
}

