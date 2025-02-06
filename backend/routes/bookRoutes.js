import express from 'express';
import { Book } from '../models/book.js';

const router = express.Router();

//get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
    
});

//get book by id

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

//add a book
router.post('/addBook', async (req, res) => {
    try {
        const { title, author, genre, publicationDate, description, coverImage } = req.body;
        const newBook = new Book({
            title,
            author,
            genre,
            publicationDate,
            description,
            coverImage
        });
        const book = await Book.create(newBook);
        res.status(201).json({book, message: "Book added successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

//update book details

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, genre, publicationDate, description, coverImage } = req.body;
        const updatedBook = {
            title,
            author,
            genre,
            publicationDate,
            description,
            coverImage
        }

        const updated = await Book.findByIdAndUpdate(id, updatedBook);
        return res.status(200).json({updated, message: "Book updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


//delete a book

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        res.status(200).json({deletedBook, message: "Book deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});



export default router;