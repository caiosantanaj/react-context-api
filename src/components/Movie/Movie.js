import React from 'react';

import './Movie.css';

const Movie = (props) => {
  return (
    <p>
      <b>{props.name}:</b> {props.price}{' '}
      <button className='button-delete'>X</button>
    </p>
  );
};

export default Movie;
