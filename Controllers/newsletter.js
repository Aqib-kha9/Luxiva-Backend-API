import { NewsLetter } from "../Models/Newsletter.js";

// add News Letter
export const addNewsLetter = async(req,res)=> {
    const {email} = req.body;
    try {
        let newsletter = await NewsLetter.create({email});
        console.log(newsletter);
        res.json({message:"NewsLetter added Successfully....",success:true,newsletter,});
    } catch (error) {
        res.json(message.error);
    }
}
