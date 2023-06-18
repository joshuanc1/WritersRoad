const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
        bookId: {
            type: String,
            
        },
        userId: {
            type: String,
           
        },
        bookISBN: [{
            type: String,
        }],
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
        },
        bookCover: {
            type: String,
        }

})


module.exports = mongoose.model('Review', reviewSchema);