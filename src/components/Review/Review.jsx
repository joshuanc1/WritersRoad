import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './review.css';
import Rating from '../Rating/Rating';
import { addReview, getListOfReviews } from '../../actions/reviewAction';
import { useEffect } from 'react';
import {loadUser} from '../../actions/userActions';



const Review = ({book, visible, user, handleVisible, setAverageRating}) => {

  const {reviewList} = useSelector(state => state.reviewList);
  const dispatch = useDispatch();
  const [starRating, setStarRating] = useState(0);
  

  const [reviewForm, setReviewForm] = useState({
    userId: user?._id,
    bookId: book._id,
    bookISBN: book.isbn,
    bookCover: book.cover,
    username: user?.username,
    rating: starRating,
    title: "",
    message: ""
  })

  const {title, message} = reviewForm;

  useEffect(() => {
    const total = reviewList.map(review => review.rating).reduce((a ,b) => a + b, 0);
    if(total){
      setAverageRating((total/reviewList.length).toFixed(2));
    }

  },[reviewList])

  useEffect(()=>{
    setReviewForm({...reviewForm, rating : starRating});
  },[starRating]);


  const handleFormChange = (e) => {
   setReviewForm({...reviewForm, [e.target.name] : e.target.value})
  };


  const handleAddReview = async(e) => {
    e.preventDefault();

  await dispatch(addReview(reviewForm));
  await dispatch(loadUser());
  alert("Review Added!")
  handleVisible();

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
          {reviewList?.length > 0 ? 
            reviewList.map(review => (
              <div className="reviews" key={review._id}>
                <Rating rating={review.rating}></Rating>
                <div>{review.title}</div>
                <div>{review.message}</div>
                <div className='reviews-username'>{review.username}</div>
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