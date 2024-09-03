import express from "express";
import { addProduct, deleteProductById, getProduct, updateProductById } from "../Controllers/productBanner.js";

const router = express.Router();

// addProducts

router.post("/add",addProduct);

// getProducts
router.get("/all",getProduct)

// // get Product By Id 
// router.get("/:id",getProductById);

// Update Product By Id
router.put("/:id",updateProductById);

// Delete Product By Id
router.delete("/:id",deleteProductById);

export default router


