const { default: axios } = require('axios');
const Book = require('../model/bookModel');
const User = require('../model/userModel');
const mongoose = require('mongoose');




exports.findBooks = async(req, res, next) => {
    const title = req.query.title;

    const data = await axios.get(`https://openlibrary.org/search.json?title=${title}&jscmd=details`);
    
    console.log(data);
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


    if(matchedBooks) {
        console.log(matchedBooks);
        return res.status(200).json({
            success: true,
            books: matchedBooks,
        })
    } else {
        return res.status(401).json({
            success: false
         })
    }

    
}

exports.getBookDetail = async(req, res, next) => {
    const isbn = req.params.isbn;
    
   
    const {data} = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);

  
    const info = data[`ISBN:${isbn}`];
    

    let bookDetail;
    if(data){
        bookDetail = (info) => {
            const {title, authors, number_of_pages, publish_date, cover={large: ""}, excerpts=[{text: "No Available Text", comment: "No Available Comments"}] } = info;
            
            return new Book({
                title,
                authors: authors[0].name,
                isbn,
                pages: number_of_pages,
                published_date: publish_date,
                cover: cover.large,
                text: excerpts[0].text,
                comment: excerpts[0].comment
            })
        }
    }
   let book = bookDetail(info);

   const bookExist = await Book.find({title: book.title});

   if(!bookExist){
    await Book.create(book);
   }
   

    return res.status(200).json({
        success: true,
        book: book,
    })

}

exports.addBookToLibrary = async(req, res, next) => {
    let book = req.body;


    //const bookID = new mongoose.Types.ObjectId(book._id);
    const bookExist = await Book.findById(book._id);

    if(!bookExist){
        await Book.create(book);
    }
 
    const user = await User.findById(req.user._id);
    

    if(user.userLibrary.includes(book._id)){
        return res.status(200).json({
            success: true,
            message: "Book Already in Library!"
        })
    } else{
        user.userLibrary.push(book);

        await user.save();

        console.log(user);

        return res.status(200).json({
            success: true,
            message: "Book added to library!"
        })
    }

}

exports.deleteBookFromLibrary = async(req, res, next) => {
    const id = req.body;
    const userId = new mongoose.Types.ObjectId(id.book);
    
    const user = await User.findById(req.user._id);

    if(user.userLibrary.includes(userId)){
        user.userLibrary = user.userLibrary.filter(book => !book.equals(userId));
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Book Deleted"
        })
    } else {
        return res.status(401).json({
            success: false,
            message: "Book is not in Library"
        })
    }

}