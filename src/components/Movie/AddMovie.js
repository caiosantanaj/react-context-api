import React, { useState, useContext } from 'react';

import './AddMovie.css';
import { movieContext } from '../../context/movie/movieContext';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { setMovies } = useContext(movieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies({ id: name + '' + price, name: name, price: '$' + price });
  };

  return (
    <form className='movie-form' onSubmit={addMovie}>
      <input
        type='text'
        name='name'
        placeholder='Name of the movie...'
        value={name}
        onChange={updateName}
      />
      <input
        type='text'
        name='price'
        placeholder='Price... (without currency)'
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
