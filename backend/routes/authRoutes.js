import express from 'express';
import { User } from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config({
    path:'.env' 
});


const router = express.Router();

//register user
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        const newUser = {
            username,
            email,
            password: await bcrypt.hash(password, 10),
            role: 'user',
            isAdmin: false

        }

        const user = await User.create(newUser);

        res.status(201).json({ user, message: "User registered successfully" });

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

        if(!user){
            return res.status(400).json({ message: "Username or password is incorrect" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if(!passwordCompare){
            return res.status(400).json({ message: "Username or password is incorrect" });
        }


        const accessToken = generateToken(user);

        res.status(200).json({ user, accessToken, message: "User logged in successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }   
});


const generateToken = (user) => {
    return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '7d',
      });
}



export default router;