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
    followers: [ObjectId],
    following: [ObjectId],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"
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

module.exports = mongoose.model('User', userSchema)