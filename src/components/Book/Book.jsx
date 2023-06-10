import React, {useState} from 'react'
import './book.css';
import bookCoverNa from '../../assets/bookCoverNA.png';
import Rating from '../Rating/Rating';


const Book = ({ book }) => {
  
const [rating, setRating] = useState(0);
  
  return (
    <div className='book-container-outer'>
    
        <img src={book.cover ? `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`: bookCoverNa} alt="book-cover" />
        <div className='book-information'>
          <h3>{book.title}</h3>
          <div>by {book.author}</div>
          <div>{book.pages} pages</div>
          <div>published {book.published_date}</div>
        </div>

        <div className="book-actions">
          <button>Add to Your Library</button>
          <div>Rate & Review this book</div>
          <div className='star-container'>
            <Rating rating={rating} onRating={(rate) => setRating(rate)}></Rating>
        
          </div>
          


        </div>
             
    </div>
  )
}

export default Book