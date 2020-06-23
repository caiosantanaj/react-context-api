import React, { useState, createContext } from 'react';

export const movieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 1 },
    { name: 'Game of Thrones', price: '$10', id: 2 },
    { name: 'Inception', price: '$10', id: 3 },
  ]);

  return (
    <movieContext.Provider value={{ movies, setMovies }}>
      {/* Valor que vem do App.js */}
      {/* Todos os componentes que tiverem dentro do MovieProvider */}
      {props.children}
    </movieContext.Provider>
  );
};
