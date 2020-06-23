import React from 'react';
import './App.css';

import Nav from './components/layout/Nav';
import MovieList from './components/Movie/MovieList';
import { MovieProvider } from './context/movie/movieContext';
import AddMovie from './components/Movie/AddMovie';

function App() {
  return (
    <MovieProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
