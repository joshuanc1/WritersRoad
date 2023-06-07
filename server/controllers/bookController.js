const { default: axios } = require('axios');
const Book = require('../model/bookModel');




exports.findBooks = async(req, res, next) => {
    const title = req.query.title;

    const { data } = await axios.get(`http://openlibrary.org/search.json?title=${title}&jscmd=details`);
    
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

    //pagination
   
    


    return res.status(200).json({
        success: true,
        books: matchedBooks,
    })
}

