import express from "express";
import { register,login,users, getProfile } from "../Controllers/user.js";
import { Authenticated } from "../Middlewares/auth.js";
const router = express.Router();


// Register User
router.post("/register",register);

// Login User

router.post("/login",login);

// Get All users

router.get("/all",users);

// Get User profile

router.get("/profile",Authenticated,getProfile);

export default router

