const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    
    author: {
        type: [String],
    },
    authors:[{
        
            type: String,
        
    }],
    isbn: {
        type: [String],
    },
   
    pages: {
        type: Number,
    },
    published_date:{
        type: String,
    },
    cover:{
        type: String,
    },
    covers:{
        large:{
            type: String,
        }
    },
    text: {
        type: String,
    },
    comment: {
        type: String,
    }
})

module.exports = mongoose.model('Book', bookSchema);