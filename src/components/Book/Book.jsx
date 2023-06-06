import React from 'react'
import './book.css';

const Book = ({ book }) => {
  return (
    <div className='book-container'>
        <h1>{book.title}</h1>
        <div>{book.author}</div>
        <div>{book.pages}</div>
        <div>{book.published_date}</div>
        <img src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} alt="book-cover" />
       
    </div>
  )
}

export default Book