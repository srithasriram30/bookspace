import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
       ref: 'Book'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    reviewText: String,
    likes: [{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], //users who liked the review
    comments: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
           ref: 'User'
       },
        text: String,
        date: Date
}]

},
{
    timestamps: true
})

export const Review = mongoose.model('Review', reviewSchema)