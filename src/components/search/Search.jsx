import React, { useState } from 'react'
import './search.css';
import { FaSearch } from 'react-icons/fa';


const Search = () => {
    const [searchWord, setSearchWord] = useState("");

    const handleSearch = () => {
        
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
    </>
  )
}

export default Search