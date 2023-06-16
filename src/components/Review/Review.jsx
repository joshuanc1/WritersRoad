import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './review.css';
import Rating from '../Rating/Rating';
import { addReview, getListOfReviews } from '../../actions/reviewAction';
import { useEffect } from 'react';



const Review = ({book, visible}) => {
  const user = useSelector(state => state.user);
  const {reviewList} = useSelector(state => state.reviewList);
  const dispatch = useDispatch();
  const [starRating, setStarRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    userId: user.user._id,
    bookId: book._id,
    bookISBN: book.isbn,
    username: user.user.username,
    rating: starRating,
    title: "",
    message: ""
  })

  const {title, message} = reviewForm;

  useEffect(()=>{
    setReviewForm({...reviewForm, userId: user.id, username: user.username})
  },[user._id, user.username]);

  useEffect(()=>{
    setReviewForm({...reviewForm, rating : starRating});
  },[starRating]);


  const handleFormChange = (e) => {
   setReviewForm({...reviewForm, [e.target.name] : e.target.value})
  }


  const handleAddReview = (e) => {
    e.preventDefault();

   dispatch(addReview(reviewForm));
   
  };

  useEffect(() => {
    dispatch(getListOfReviews(book.isbn));
  },[]);

  return (
    <div className='review_outer-container'>
      {visible &&
      <div className='review_form-container'>
          <form onSubmit={handleAddReview}>
            <Rating rating={starRating} onRating={(rate) => setStarRating(rate)} value={starRating}/>
            <label htmlFor="title">Title:</label>
            <input required name="title" type="text" placeholder='title' value={title} onChange={handleFormChange}/>
            <label htmlFor="message">Review:</label>
            <textarea required name="message" cols="30" rows="10" placeholder='write your review here' value={message} onChange={handleFormChange}></textarea>
            <button type='submit'>Submit Review</button>
          </form>
      </div>
      }
      <div className='review_list_users'>
          {reviewList.length > 0 ? 
            reviewList.map(review => (
              <div className="reviews" key={review._id}>
                <Rating rating={review.rating}></Rating>
                <div>{review.title}</div>
                <div>{review.message}</div>
                <div>{review.username}</div>
              </div>
            ))
          :
            <div>No reviews for this book yet!</div>
          }

      </div>
        
    </div>
  )
}

export default Review