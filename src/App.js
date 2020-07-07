import React from 'react';
import './App.css';

import ItemState from './context/item/ItemState';
import AlertState from './context/alert/AlertState';

import Nav from './components/layout/Nav';
import ItemList from './components/Item/ItemList';
import AddItem from './components/Item/AddItem';
import Footer from './components/layout/Footer';

function App() {
  return (
    <AlertState>
      <ItemState>
        <div className='App'>
          <Nav />
          <div className='Container'>
            <div className='Items'>
              <ItemList />
            </div>
            <div className='Form'>
              <AddItem />
            </div>
          </div>
          <Footer />
        </div>
      </ItemState>
    </AlertState>
  );
}

export default App;
