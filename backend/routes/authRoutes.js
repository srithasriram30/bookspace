import express from 'express';
import { User } from "../models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config({
    path:'.env' 
});


const router = express.Router();

// router.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }));

//register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;


        const newUser = {
            username,
            email,
            password: await bcrypt.hash(password, 10),
            role
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});


//login user
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }); 

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!user || !passwordCompare){
            return res.status(400).json({ message: "Username or password is incorrect" });
        }

        const accessToken = jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).json({ user, accessToken, message: "User logged in successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }   
});
