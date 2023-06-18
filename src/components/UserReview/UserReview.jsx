import React, { useEffect } from 'react';
import './userReview.css';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '../Rating/Rating';
import { deleteReview } from '../../actions/reviewAction';
import { loadUser } from '../../actions/userActions';

const UserReview = () => {

const dispatch = useDispatch();
const { user } = useSelector(state=> state.user);



const handleReviewDelete = async(id) => {
    await dispatch(deleteReview(id));
   await dispatch(loadUser());
}





  return (
    <div className='user_review-outer-container'>
        <div className='user_review-header'></div>
        <div className="user_review-inner-container">
            { user.userReviews.length > 0 ? 
                user.userReviews.map(review => {
                   return <div key={review._id} className="review_container">
                            <img style={{width: 100}} src={review.bookCover} alt="book_cover" />
                            <div>
                                <Rating rating={review.rating}></Rating>
                                <div>{review.title}</div>
                                <div>{review.message}</div>
                                <div onClick={() => handleReviewDelete(review._id)}>Delete</div>
                            </div>
                        </div>
                })
            :
            <div>You haven't reviewed any books yet!</div>
            }

        </div>
    </div>
  )
}

export default UserReview