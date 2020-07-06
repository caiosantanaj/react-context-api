import React, { useState, useContext } from 'react';

import './AddMovie.css';

import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';

const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { setMovies } = useContext(MovieContext);
  const { setAlert } = useContext(AlertContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const whiteSpaceHandle = (movieName) => {
    return movieName.replace(/\s/g, '');
  };

  const addMovie = (e) => {
    e.preventDefault();

    if (name === '') {
      setAlert('Error: Fields are empty');
    } else {
      setMovies({
        id: whiteSpaceHandle(name) + '' + price,
        name: name,
        price: '$' + price,
      });
    }
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
      <Alert />
    </form>
  );
};

export default AddMovie;
