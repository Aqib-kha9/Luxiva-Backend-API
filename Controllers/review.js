import { Review } from "../Models/Review.js";
import { Product } from "../Models/Product.js";
import { get } from "mongoose";


// Create Review

export const createReview = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    console.log(product);
    const { comment, rating, imgSrc, name } = req.body;
    let newReview = new Review({ comment, rating, imgSrc, name });
    newReview.author = req.user._id;
    console.log(product.reviews)
    product.reviews.push(newReview);
    await newReview.save();
    console.log(newReview);
    await product.save();
    res.json({ message: "New review added", success: true });
  } catch (error) {
    throw error;
  }
};

// Get All Reviews

export const getReviews = async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);
    // const getAllReviewsId = product.reviews;
    const getAllReviews = await Review.find({
      _id: { $in: product.reviews },
    });

    res.json({ message: "Get all reviews", getAllReviews, success: true });
  } catch (error) {
    // Error handling
    console.error(error);
    res.status(500).json({ message: "Server error", success: false });
  }
};


// Delete Review

export const destroyReview = async (req, res) => {
  let { id, reviewId } = req.params;
  const userId = req.query.userId;
  console.log(req.params);
  console.log(
    `this is id${id},  it is reviewId${reviewId}, it is userId ${userId}`
  );

  const review = await Review.findById(reviewId);
  console.log(review);
  if (!review) {
    return res.json({ message: "Review not found", success: false });
  }
  console.log(userId);

  if (userId !== review.author.toString()) {
    return res.json({
      message: "You are not the owner of this review",
      success: false,
    });
  }
  await Product.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Review.findByIdAndDelete(reviewId);
  console.log(Review);
  console.log(reviewId);
  res.json({ message: "Review Was Deleted!", success: true });
};
