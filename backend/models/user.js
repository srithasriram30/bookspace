import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    profilePic: String,
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    notifications: [
        {
          type: String, 
          message: String, 
          read: Boolean, 
          date: Date
        }
      ]
},
{
    timestamps: true
})

export const User = mongoose.model('User', userSchema)