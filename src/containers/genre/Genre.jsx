import React from 'react'
import './genre.css'
import {useState} from 'react';
import { mystery, fantasy, horror, scifi, romance, history, family, animated } from '../../assets';
import GenreCard from './GenreCard';

const Genre = () => {
  const [genreList, setGenreList] = useState(
    [{type: 'Mystery', url: mystery},
    {type: 'Fantasy', url: fantasy},
    {type: 'Horror', url: horror},
    {type: 'Sci-Fi', url: scifi},
    {type: 'Romance', url: romance},
    {type: 'Historical', url: history},
    {type: 'Family', url: family},
    {type: 'Children', url: animated}
  ]);
  
  const cursorChange = (e) => {
      const blob = document.getElementById("cursor");
      const { clientX, clientY } = e;
      blob.style.display = 'inline';

      blob.style.left = `${clientX}px`;
      blob.style.top = `${clientY}px`;
  }



  return (
    <div className='genre_container'>
      <div className='genre_title-cards'>
        <h2>Explore Different Genres</h2>
        <p>Get inspiration from all types of books to enhance your own writing styles and needs.</p>
        <div className='genre_title-nav'>
          <p>BROWSE GENRE</p> 
          <p>LEARN MORE</p>
        </div>
      </div>
      <div className= 'genre_carousel-outer-container' onPointerMove={e=> cursorChange(e)}>
        <div id="cursor"></div>
        <div className='genre_carousel-inner-container'>
          {genreList.map(img => <GenreCard key={img} img={img}></GenreCard>)}
        </div>
      </div>
    </div>
  )
}

export default Genre