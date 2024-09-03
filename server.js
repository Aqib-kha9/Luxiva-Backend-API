import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from "./Routes/user.js";
import productRouter from "./Routes/product.js";
import cartRouter from "./Routes/cart.js";
import addressRouter from "./Routes/address.js";
import reviewRouter from "./Routes/review.js";
import productBannerRouter from "./Routes/productBanner.js";
import saleProductRouter from "./Routes/saleProduct.js";
import testimonialRouter from "./Routes/testimonial.js";
import newsLetter from "./Routes/newsletter.js";
import cors from "cors";



const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use(cors({
    origin: true,
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}))

// Demo Home Route
app.get("/",(req,res)=>{
    res.json({message:"this is a home route"})
});

// user Router
app.use("/api/user",userRouter);

// product Router
app.use("/api/product",productRouter);

// Product Banner

app.use("/api/product/banner",productBannerRouter);

// Product Banner

app.use("/api/product/sale",saleProductRouter);

// Testimonial Router

app.use("/api/product/testimonial",testimonialRouter);

// News Letter Router

app.use("/api/newsletter",newsLetter);

// Cart Router
app.use("/api/cart",cartRouter);

// Address Router
app.use("/api/address",addressRouter);

// Review Router
app.use("/api/product",reviewRouter);

const port = 8080;

mongoose.connect(
    "mongodb+srv://bakki3320:prGzHoFCXkAnLk9P@cluster0.s3kx0kk.mongodb.net/",{
        dbName: "E_Commerce"
    }
).then(()=>{
    console.log("mongodb Connected successfully....");
}).catch((err)=>{
    console.log(err);
});

app.listen(port,()=>{
    console.log(`server is listen on port ${port}`);
});
