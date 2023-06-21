import React from 'react'
import './pagination.css';

const Pagination = ({booksPerPage, totalBooks, paginate, currentPage}) => {

    const pageNumbers = [];
   
    for(let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++){
        pageNumbers.push(i);
    }

    
   

  return (
        <nav className='pagination_container'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <button onClick={() => paginate(number)} className={`page_number ${number === currentPage ? "selected": ""}`} > {number} </button>
                    </li>
                ))}
            
            </ul>
        </nav>
  )
}

export default Pagination;