import React, { useState } from 'react'
import './search.css';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedBooks } from '../../actions/searchActions';
import Book from '../Book/Book';


const Search = () => {
    const dispatch = useDispatch();
    const [searchWord, setSearchWord] = useState("");
    const {books} = useSelector(state => state.books);
 
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(getSearchedBooks(searchWord));
    }



  return (
    <>
        <div className='search_header-background'></div>
        <div className='search_container-outer'>
            <div className='search_container-inner'>
                <h1>Search For Various Books</h1>
                <p>Enter the title of a book and add it to your own library or review them!</p>
                <form className='search-input-container' onSubmit={handleSearch}>
                    <input className='search-input' type="text" placeholder='Search here' value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
                    <button type='submit' className='search-input-button'>
                        <FaSearch/>
                    </button>
                </form>
            </div>
        </div>
        <div className='search_container-books'>
                                                        
            {books.length > 0 ?
                books.map((book)=> {
                    return <Book key={book._id} book={book}/>
                })
            :
                <p>WHY DOESNT THIS WORK</p>
            }

        </div>
    </>
  )
}

export default Search