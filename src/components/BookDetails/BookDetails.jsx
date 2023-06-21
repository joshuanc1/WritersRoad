import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './bookDetails.css';
import {useNavigate} from 'react-router-dom';
import bookCoverNa from '../../assets/bookCoverNA.png';
import Rating from '../Rating/Rating';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';

const BookDetails = () => {
    const navigate = useNavigate();

    const {book, loading} = useSelector(state => state.book);
    const {isAuthenticated, user} = useSelector(state => state.user);
   
    const [visible, setVisible] = useState(false);
    const [averageRating, setAverageRating] = useState(0);

    const handleVisible =() => {
        setVisible(!visible);
    }
    const handleAlert =() => {
        navigate('/user/login');
    }

  return (

    <>
    {loading ? <Loading/> :
    <div className='book_detail-outer-container'>
            <div className='book_detail-header'></div>
            
    
                <div className='book_detail-inner-container'>
                    <img src={book.cover ? book.cover : bookCoverNa} alt="book-cover" />
                    <div className='book_detail-info'>
                        <h1>{book.title}</h1>
                        <div className='book_detail-author'>{book.authors}</div>
                        <div className='book_detail-rating'>
                            <Rating rating={averageRating}></Rating>
                            <div>Rating: {averageRating}</div>
                        </div>
                        <div>
                        <div>{book.comment} of {book.title}</div>
                        <div className='book_detail-text'>"{book.text}"</div>
                        <div>pages: {book.pages ? book.pages : "N/A"}</div>
                        </div>
                    </div>
            </div>
        



            <div className='book_detail-reviews'>
                {!isAuthenticated ? 
                <div className='addReview-btn' onClick={handleAlert} >Write a Review</div>
                :
                <div className='addReview-btn' onClick={handleVisible} >Write a Review</div>
                }
                
                <Review visible={visible} book={book} user={user} handleVisible={handleVisible} setAverageRating={setAverageRating}/>
                
            </div>
        
        
    </div>
    }
    </>
  )
}

export default BookDetails