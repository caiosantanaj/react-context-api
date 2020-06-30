import React, { useContext } from 'react';

import './Movie.css';
import MovieContext from '../../context/movie/movieContext';

const Movie = (props) => {
  const { removeMovie } = useContext(MovieContext);
  const { id, name, price } = props.movie;

  return (
    <p>
      <b>{name}:</b> {price}{' '}
      <button className='button-delete' onClick={() => removeMovie(id)}>
        X
      </button>
    </p>
  );
};

export default Movie;
