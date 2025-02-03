import mongoose from "mongoose"

const reviewSchema = mongoose.Schema({
    userId: ObjectId,
    bookId: ObjectId,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    reviewText: String,
    likes: [ObjectId], //users who liked the review
    comments: [{
        userId: ObjectId,
        text: String,
        date: Date
}]

},
{
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)