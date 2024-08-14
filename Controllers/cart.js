import { Cart } from "../Models/Cart.js";

// add To Cart

export const addToCart = async (req,res) =>{
    const {productId,title,price,qty,imgSrc} = req.body;
    
    const userId = req.user;

    let cart = await Cart.findOne({userId});
    if(!cart){
        cart = new Cart({userId,items:[]});
        
    }
    
    const itemIndex = cart.items.findIndex(
        (item) => item.productId?.toString()===productId
    );
    console.log(itemIndex);

    if(itemIndex > -1){
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price * qty;
    }else{
        cart.items.push({productId,title,price,qty,imgSrc});
    }
    
    await cart.save();
    res.json({message:"Item added to Cart",cart});
};

// export const addToCart = async (req, res) => {
//     const { productId, title, price, qty, imgSrc } = req.body;
  
//     const userId = req.user;
  
//     let cart = await Cart.findOne({ userId });
  
//     if (!cart) {
//       cart = new Cart({ userId, items: [] }); 
//     }
     
//     const itemIndex = cart.items.findIndex(
//       (item) => item.productId.toString() === productId
//     );
   
//     if (itemIndex > -1) {
//       cart.items[itemIndex].qty += qty;
//       cart.items[itemIndex].price += price * qty; 
//     } else {
//       cart.items.push({ productId, title, price, qty, imgSrc });
//     }
  
//     await cart.save();
//     res.json({ message: "Items Added To Cart", cart });
//   };


// User Cart
export const userCart = async(req,res)=>{
    const userId = req.user;
    
    let cart = await Cart.findOne({userId});
    if(!cart) return res.json({message:"Cart not found!"})
    res.json({message:"user cart",cart});
}

// Remove product from cart
export const removeProductFromCart = async(req,res)=>{
    const productId = req.params.productId;
    const userId = req.user;
    
    let cart = await Cart.findOne({userId});
    if(!cart) return res.json({message:"Cart not found!"});

    cart.items = cart.items.filter((item)=>item.productId.toString() !== productId);
    await cart.save();

    res.json({message:"remove product from cart"});
}


// Clear cart
export const clearCart = async(req,res)=>{
    const userId = req.user;
    let cart = await Cart.findOne({userId});

    if(!cart){
        cart = new Cart({items:[]});
    }else{
        cart.items = [];
    }
    await cart.save();
    res.json({message:"cart cleared"});
}


// decrease product Qty

export const decreaseProductQty = async (req,res) =>{
    const {productId,qty} = req.body;
    
    const userId = req.user;
    let cart = await Cart.findOne({userId});
    if(!cart){
        let cart = new Cart({userId,items:[]});
    }

    const itemIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
    );

    if(itemIndex > -1){
        const item = cart.items[itemIndex]

        if(item.qty>qty){
            const pricePerUnit = item.price/item.qty;
            item.qty -= qty
            item.price -= pricePerUnit*qty
        }else{
            cart.items.splice(itemIndex,1)
        }

    }else{
        return res.json({message:"Invalid Product Id"})
    }
    
    await cart.save();
    res.json({message:"Item qty decreased",cart});
};