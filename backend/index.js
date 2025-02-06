import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import booksRoutes from './routes/bookRoutes.js'
import connectDB from './config/dbConn.js'

dotenv.config({
    path:'.env' 
});

const PORT = process.env.PORT;
const mongodbUrl = process.env.MONGODB_URI;
const app = express();
app.use(express.json())

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});


mongoose.connect(mongodbUrl)
.then(() => {
    console.log('App connected to MongoDB')
})

// connectDB();

app.get('/', (req,res)=> {
    res.send('Hello world!')
})


app.use('/books', booksRoutes)