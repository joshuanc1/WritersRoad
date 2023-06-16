const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
        bookId: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        bookISBN: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        rating: {
            type: Number,
        },
        message: {
            type: String,
        },
        username: {
            type: String,
        }

})


module.exports = mongoose.model("Review", reviewModel);