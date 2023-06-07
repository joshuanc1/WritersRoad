import React, {useRef} from 'react'
import './book.css';
import star from '../../assets/star.png';
import bookCoverNa from '../../assets/bookCoverNA.png';

const Book = ({ book }) => {

  const starRef = useRef(star);
  
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

              {[1,2,3,4,5].map((number)=>{ return <a href="#" key={number} ref={starRef}><img className='star' src={star} alt="star" /></a>})}
        
          </div>


        </div>
             
    </div>
  )
}

export default Book