import React from 'react'
import './genre.css';

const GenreCard = ({img}) => {
  return (
    <div className='genre-card-container'> 
        <h2 className='genre-card-title'>{img.type}</h2>
        <img draggable={false} className='genre-card-img' src={img.url} alt="genre.logo" />
    </div>
  )
}

export default GenreCard