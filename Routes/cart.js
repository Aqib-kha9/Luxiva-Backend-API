import express from "express";
import { addToCart, clearCart, decreaseProductQty, removeProductFromCart, userCart } from "../Controllers/cart.js";
const  router = express.Router();
import { Authenticated } from "../Middlewares/auth.js";


//add to cart
router.post("/add",Authenticated,addToCart);

// get user Cart
router.get("/user",Authenticated,userCart);

// Remove product from cart
router.delete("/remove/:productId",Authenticated,removeProductFromCart);

// Clear Cart
router.delete("/clear",Authenticated,clearCart);

// Decrease product from cart
router.post("/--qty",Authenticated,decreaseProductQty);

export default router;