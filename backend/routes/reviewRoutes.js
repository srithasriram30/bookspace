//add review to book
import express from 'express';
import { Review } from "../models/review";
import { Book } from "../models/book";

const router = express.Router();


router.post('/:id/addReview', async (req, res) => {
    try {
        const { id } = req.params;
        const { rating, review } = req.body;

        //get all sum of ratings of the book

        const reviews = await Review.find({bookId: id}).select('reviews');

        if(reviews.length === 0){
            const newReview = new Review({
                bookId: id,
                rating,
                review
            });
            const addedReview = await Review.create(newReview);
            //add review to book
            const book = await Book.findById(id);
            book.reviews.push(addedReview);
            book.averageRating = rating;
            await Book.findByIdAndUpdate(id, book);
            res.status(201).json({addedReview, message: "Review added successfully"});
        } else {
            const addedReview = await Review.create(newReview);
            reviews.push(addedReview);
            let sum = 0;
            reviews.forEach(review => {
                sum += review.rating;
            });
            let averageRating = sum / reviews.length;
            //add review to book
            const book = await Book.findById(id);
            book.reviews = reviews;
            book.averageRating = averageRating;
            await Book.findByIdAndUpdate(id, book);
            res.status(201).json({addedReview, message: "Review added successfully"});
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

export default router;