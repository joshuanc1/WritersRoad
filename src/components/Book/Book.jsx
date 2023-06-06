import React from 'react'
import './book.css';

const Book = ({book}) => {
  return (
    <div className='book-container'>
        <h1>{book.title}</h1>
        <div>{book.author}</div>
        <div>{book.isbn}</div>
        <div>{book.pages}</div>
        <div>{book.published_date}</div>
    </div>
  )
}

export default Book