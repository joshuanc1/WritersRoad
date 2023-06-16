import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './bookDetails.css';
import bookCoverNa from '../../assets/bookCoverNA.png';
import Rating from '../Rating/Rating';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';

const BookDetails = () => {

    const {book, loading} = useSelector(state => state.book);
    const {isAuthenticated} = useSelector(state => state.user);
    const [rating, setRating] = useState(0);
    const [visible, setVisible] = useState(false);

  return (

    <>
    {loading? <Loading/> :
    <div className='book_detail-outer-container'>
       
            <div className='book_detail-inner-container'>
                
                <img src={book.cover ? book.cover : bookCoverNa} alt="book-cover" />
                <div className='book_detail-info'>
                    <h1>{book.title}</h1>
                    <div className='book_detail-rating'>
                        <Rating rating={rating} onRating={(rate) => setRating(rate)}></Rating>
                        <div>Rating: {rating}</div>
                    </div>
                    <div>{book.authors}</div>
                    <div>{book.comment} of {book.title}</div>
                    <div>"{book.text}"</div>
                    <div>pages: {book.pages}</div>
                </div>
            </div>
            <div className='book_detail-reviews'>
                {!isAuthenticated ? 
                <div className='addReview-btn' >Write a Review</div>
                :
                <div className='addReview-btn' onClick={()=>setVisible(false ? true : false)} >Write a Review</div>
                }
                
                <Review book={book}/>
                
            </div>
        
        
    </div>
    }
    </>
  )
}

export default BookDetails