import express, { request } from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import bcrypt from 'bcrypt'

const PORT = process.env.PORT || 3500;
const app = express();
app.use(express.json())

const users =[]
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});

app.get('/', (req,res)=> {
    res.send('Hello world!')
})


app.get('/users', (req,res) =>{
    res.json(users);
})