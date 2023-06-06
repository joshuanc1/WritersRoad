const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    author: {
        type: String,
    },
    isbn: {
        type: [String],
    },
    url: {
        type: String,
    },
    publishedDate:{
        type: String,
    },
    cover:{
        type: String,
    }
})

module.exports = mongoose.model('Book', bookSchema);