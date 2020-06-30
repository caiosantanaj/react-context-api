import React, { useContext, Fragment } from 'react';

import Movie from './Movie';
import MovieContext from '../../context/movie/movieContext';

const MovieList = () => {
  const movieContext = useContext(MovieContext);
  const { movies } = movieContext;

  return (
    <Fragment>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Fragment>
  );
};

export default MovieList;
