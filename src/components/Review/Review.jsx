import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './review.css';
import Rating from '../Rating/Rating';
import { addReview } from '../../actions/reviewAction';
import { useEffect } from 'react';



const Review = ({book}) => {
  const user = useSelector(state => state.user);
  const reviews = useSelector(state => state.review);

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

  useEffect(()=>{
    setReviewForm({...reviewForm, userId: user.id, username: user.username})
  },[user._id, user.username]);

  useEffect(()=>{
    setReviewForm({...reviewForm, rating : starRating});
  },[starRating]);



  const handleFormChange = (e) => {
   setReviewForm({...reviewForm, [e.target.name] : e.target.value})
  }

  const {userId, bookId, bookISBN, username, rating, title, message} = reviewForm;

  const handleAddReview = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('bookId', bookId);
    formData.append('bookISBN',bookISBN);
    formData.append('username', username);
    formData.append('rating', rating);
    formData.append('title', title);
    formData.append('message', message);

   dispatch(addReview(formData));
   
  };

  return (
    <div className='review_outer-container'>
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
      <div className='review_list_users'>


      </div>
        
    </div>
  )
}

export default Review