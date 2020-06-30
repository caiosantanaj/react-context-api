import React, { useReducer } from 'react';
import movieReucer from './movieReducer';
import { ADD_MOVIE, REMOVE_MOVIE } from '../types';
import movieContext from './movieContext';

const MovieState = (props) => {
  const initialState = {
    movies: [
      { id: 'HarryPotter10', name: 'Harry Potter', price: '$10' },
      { id: 'GameOfThrones10', name: 'Game of Thrones', price: '$10' },
      { id: 'Inception10', name: 'Inception', price: '$10' },
    ],
  };

  const [state, dispatch] = useReducer(movieReucer, initialState);

  const setMovies = (movie) => {
    const mvs = state.movies;
    let contains = false;

    for (let i = 0; mvs.length > i; i++) {
      if (mvs[i].name === movie.name || mvs[i].id === movie.id) {
        contains = true;
      }
    }

    if (!contains)
      dispatch({
        type: ADD_MOVIE,
        payload: movie,
      });
  };

  const removeMovie = (id) => {
    const moviesCopy = state.movies;

    const filteredMovies = moviesCopy.filter((obMovie) => {
      return obMovie.id !== id;
    });

    dispatch({
      type: REMOVE_MOVIE,
      payload: filteredMovies,
    });
  };

  return (
    <movieContext.Provider
      value={{ movies: state.movies, setMovies, removeMovie }}
    >
      {props.children}
    </movieContext.Provider>
  );
};

export default MovieState;

//   return (
//     <movieContext.Provider value={{ movies, setMovies }}>
//       {/* Valor que vem do App.js */}
//       {/* Todos os componentes que tiverem dentro do MovieProvider */}
//       {props.children}
//     </movieContext.Provider>
//   );
// };
