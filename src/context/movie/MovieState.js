import React, { useReducer, useContext } from 'react';
import movieReucer from './movieReducer';
import { ADD_MOVIE, REMOVE_MOVIE } from '../types';
import MovieContext from './movieContext';
import AlertContext from '../alert/alertContext';

const MovieState = (props) => {
  const initialState = {
    movies: [
      { id: 'HarryPotter10', name: 'Harry Potter', price: '$10' },
      { id: 'GameOfThrones10', name: 'Game of Thrones', price: '$10' },
      { id: 'Inception10', name: 'Inception', price: '$10' },
    ],
  };

  const [state, dispatch] = useReducer(movieReucer, initialState);
  const { setAlert } = useContext(AlertContext);

  const setMovies = (movie) => {
    const mvs = state.movies;
    let contains = false;

    for (let i = 0; mvs.length > i; i++) {
      if (mvs[i].name === movie.name || mvs[i].id === movie.id) {
        contains = true;
      }
    }

    if (!contains) {
      dispatch({
        type: ADD_MOVIE,
        payload: movie,
      });
    } else {
      setAlert('Error: This movie is already on the list');
    }
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
    <MovieContext.Provider
      value={{ movies: state.movies, setMovies, removeMovie }}
    >
      {props.children}
    </MovieContext.Provider>
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
