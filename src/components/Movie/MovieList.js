import React, { useContext, Fragment } from 'react';
import Movie from './Movie';
import { movieContext } from '../../context/movie/movieContext';

const MovieList = () => {
  const { movies } = useContext(movieContext);

  return (
    <Fragment>
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </Fragment>
  );
};

export default MovieList;
