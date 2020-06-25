import { ADD_MOVIE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      console.log(action.payload);
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    }

    default:
      return state;
  }
};
