import React from 'react'
import { useSelector } from 'react-redux'
import './library.css'

const Libary = () => {
  const { library } = useSelector(state => state.library);
  return (
    <div className='library_header-background'>
      {library ? library.map(book => {
        <div key={book._id}>
            <img src={book.cover} alt="book-cover" />
            <h1>{book.title}</h1>
        </div>
        
      })
      :
      "no available"
      }
        
    </div>
  )
}

export default Libary