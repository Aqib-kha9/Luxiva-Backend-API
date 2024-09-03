import express from 'express';
import { createReview,destroyReview, getReviews } from '../Controllers/review.js';
import { Authenticated } from "../Middlewares/auth.js";


const router = express.Router();



router.post("/:id/review",Authenticated,createReview);

router.get("/:id/all",getReviews);

router.delete("/:id/:reviewId/",Authenticated,destroyReview);

export default router