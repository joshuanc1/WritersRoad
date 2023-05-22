const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    username: {
        type: String,
        required: [true, "Please enter username"],
        unique: [true, "Username already taken"],
        minlength: [6, "Username must be a minimum 6 characters"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [10, "Password must be a minimum 10 characters"],
        select: false,
    },
    favoritedBooks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
        }
    ],
    userReviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]

})

module.exports = mongoose.model("User", userSchema);