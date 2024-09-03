import express from 'express';
import {addtestimonial,deleteTestimonialById,getTestimonial, updateTestimonialById} from "../Controllers/testimonial.js";

const router = express.Router();



// addProducts

router.post("/add",addtestimonial);

// get all testimonial 

router.get("/all",getTestimonial);


// Update testimonial By Id

router.put("/:id",updateTestimonialById);

// Delete Testimonial By Id

router.delete("/:id",deleteTestimonialById);







export default router