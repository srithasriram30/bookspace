import mongoose from "mongoose";

const shelfSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    books: [{
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },
        shelfType: {
            type: String,
            enum: ['read', 'currentlyReading', 'wantToRead']
        }
    }]
},
{
    timestamps: true
});

export const Shelf = mongoose.Schema("Shelf", shelfSchema);