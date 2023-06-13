import React, {useState} from 'react'
import './book.css';
import bookCoverNa from '../../assets/bookCoverNA.png';
import Rating from '../Rating/Rating';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { getSingleBook, addBookToLibrary } from '../../actions/searchActions';


const Book = ({ book, isAuthenticated }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  


  const handleReview = (isbn) => {
    dispatch(getSingleBook(isbn));
    navigate(`/book/${isbn}`);
  }

  const handleAdd = (book) => {

    dispatch(addBookToLibrary(book));
  }
  
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
          <button onClick={isAuthenticated ? (() => handleAdd(book)): (()=> alert("You have to sign in first!"))}>Add to Your Library</button>
          <div className='book-review_link' onClick={() => handleReview(book.isbn[0])} >Rate & Review this book</div>
          <div className='star-container'>
            <Rating rating={rating} onRating={(rate) => setRating(rate)}></Rating>
        
          </div>
          


        </div>
             
    </div>
  )
}

export default Book