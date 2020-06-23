import React from 'react';

const Movie = (props) => {
  return (
    <p>
      <b>{props.name}:</b> {props.price}
    </p>
  );
};

export default Movie;
