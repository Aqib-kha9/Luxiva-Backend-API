import express from 'express';
import { addNewsLetter } from '../Controllers/newsletter.js';

const  router = express.Router();


// add testimonial

router.post("/add",addNewsLetter);






export default router;


