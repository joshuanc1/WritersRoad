import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './library.css'
import {useNavigate} from 'react-router-dom'
import {getSingleBook, removeBookFromLibrary} from '../../actions/searchActions';
import { loadUser } from '../../actions/userActions';

const Libary = () => {
  const { user }  = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleReview = (isbn) => {
    dispatch(getSingleBook(isbn));
    navigate(`/book/${isbn}`);
  }

  const handleRemove = async(id) => {
    await dispatch(removeBookFromLibrary(id));
    await dispatch(loadUser());
  }


  return (
    <div className='library_header-background'>
      <h1 className='library_title'>My Library</h1>
      <p>Update your library and add Reviews!</p>

      <div className='diagonal'>
      <div className='library_outer-container'>

      <div className='profile-container'>
        <div className='profile-inner'>
        <h2>{user.name}</h2>
        <div>{user.username}</div>
        </div>
      </div>

      <div className='book-library-container'>
    
        {user.userLibrary.length > 0 ? user.userLibrary.map(book => (
          
          <div className='book_box' key={book.isbn[0]}>
              <div>{book.title}</div>
              <img onClick={() =>handleReview(book.isbn[0])} style={{width: 200, height: 300}} src={`https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`} alt="book-cover" />

              <div className='remove' onClick={()=> handleRemove(book._id)}>remove from library</div>
          </div>

      
        ))
        :
        "No books in your Library!"
      
      }

      </div>
      </div>
      </div>
    </div>
  )
}

export default Libary