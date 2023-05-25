const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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




userSchema.methods.comparePassword = async function(passwordEntered) {
    return await bcrypt.compare(passwordEntered, this.password);
}


userSchema.methods.createToken = function() {
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES})
}

module.exports = mongoose.model("User", userSchema);