import React from 'react'
import './pagination.css';

const Pagination = ({booksPerPage, totalBooks}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalBooks/booksPerPage); i++){
        pageNumbers.push(i);
    }

  return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map((number) => {
                    <li key={number}>
                        <a href="!#" className='page'> {number}</a>
                    </li>
                })}
            
            </ul>
        </nav>
  )
}

export default Pagination