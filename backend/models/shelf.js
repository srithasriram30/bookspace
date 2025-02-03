import mongoose from "mongoose";

const shelfSchema = mongoose.Schema({
    userId: isObjectIdOrHexString,
    books: [{
        bookId: isObjectIdOrHexString,
        shelfType: {
            type: String,
            enum: ['read', 'currentlyReading', 'wantToRead']
        }
    }]
},
{
    timestamps: true
});

module.exports = mongoose.Schema("Shelf", shelfSchema);