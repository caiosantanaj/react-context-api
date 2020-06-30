import { ADD_MOVIE, REMOVE_MOVIE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    }

    case REMOVE_MOVIE: {
      return {
        ...state,
        movies: action.payload,
      };
    }

    default:
      return state;
  }
};
