import React from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import MovieList from './components/Movie/MovieList';
import AddMovie from './components/Movie/AddMovie';
import MovieState from './context/movie/MovieState';

function App() {
  return (
    <MovieState>
      <div className='App'>
        <Nav />
        <MovieList />
        <AddMovie />
      </div>
    </MovieState>
  );
}

export default App;
