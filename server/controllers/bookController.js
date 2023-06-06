const { default: axios } = require('axios');
const Book = require('../model/bookModel');
const sendCookie = require('../utils/cookie');



exports.findBooks = async(req, res, next) => {
    const title = req.query.title;

    const { data } = await axios.get(`http://openlibrary.org/search.json?title=${title}`);
    
    const {docs} = data;

    let matchedBooks;
    if(docs){
            matchedBooks = docs.map(book => {
                const {title, author_name, isbn, number_of_pages_median, first_publish_year, cover_i} = book;
                return new Book({
                    title,
                    author: author_name,
                    isbn,
                    pages: number_of_pages_median,
                    published_date: first_publish_year,
                    cover: cover_i
                })
            }
        )}
    


    return res.status(200).json({
        success: true,
        books: matchedBooks,
    })
}

