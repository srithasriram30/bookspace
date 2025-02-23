//TODO: get all users (admin only)

import express from 'express';
import { User } from "../models/user.js";
import { adminAuth } from "../middleware/middleware.js";


const router = express.Router();

//get all users
router.get('/', adminAuth, async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
});

export default router;