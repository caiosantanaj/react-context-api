import React from 'react';
import './App.css';

import MovieState from './context/movie/MovieState';
import AlertState from './context/alert/AlertState';

import Nav from './components/layout/Nav';
import MovieList from './components/Movie/MovieList';
import AddMovie from './components/Movie/AddMovie';
import Footer from './components/layout/Footer';

function App() {
  return (
    <AlertState>
      <MovieState>
        <div className='App'>
          <Nav />
          <div className='Container'>
            <div className='Movies'>
              <MovieList />
            </div>
            <div className='Form'>
              <AddMovie />
            </div>
          </div>
          <Footer />
        </div>
      </MovieState>
    </AlertState>
  );
}

export default App;
