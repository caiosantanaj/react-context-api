import React, { useReducer } from 'react';
import movieReucer from './movieReucer';
import { ADD_MOVIE } from '../types';
import movieContext from './movieContext';

const MovieState = (props) => {
  const initialState = {
    movies: [
      { id: 1, name: 'Harry Potter', price: '$10' },
      { id: 2, name: 'Game of Thrones', price: '$10' },
      { id: 3, name: 'Inception', price: '$10' },
    ],
  };

  const [state, dispatch] = useReducer(movieReucer, initialState);

  const setMovies = (movie) => {
    dispatch({
      type: ADD_MOVIE,
      payload: movie,
    });
  };

  return (
    <movieContext.Provider value={{ movies: state.movies, setMovies }}>
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
