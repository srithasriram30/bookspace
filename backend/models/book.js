import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: [String],
    publicationDate: Date,
    description: String,
    coverImage: String,
    averageRating: Number,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
},
{
    timestamps: true
})

export const Book = mongoose.model("Book", bookSchema);