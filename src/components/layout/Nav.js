import React, { useContext } from 'react';
import './Nav.css';
import { movieContext } from '../../context/movie/movieContext';

const Nav = () => {
  const { movies } = useContext(movieContext);
  // console.log(movies.length);
  return (
    <div className='header'>
      <h3>Caio</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
