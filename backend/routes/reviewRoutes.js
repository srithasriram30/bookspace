//add review to book
import express from 'express';
import { Review } from "../models/review";

const router = express.Router();


router.post('/:id/addReview', async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, review } = req.body;

        //get all sum of ratings of the book

        const reviwes = await Review.find({bookId: id}).select('rating');



    } catch (error) {
        
    }
});

export default router;