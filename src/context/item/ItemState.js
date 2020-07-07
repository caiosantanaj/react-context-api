import React, { useReducer, useContext } from 'react';
import itemReucer from './itemReducer';
import { ADD_ITEM, REMOVE_ITEM } from '../types';
import ItemContext from './itemContext';
import AlertContext from '../alert/alertContext';

const ItemState = (props) => {
  const initialState = {
    items: [
      { id: 'HarryPotter10', name: 'Harry Potter', price: '$10' },
      { id: 'GameOfThrones10', name: 'Game of Thrones', price: '$10' },
      { id: 'Inception10', name: 'Inception', price: '$10' },
    ],
  };

  const [state, dispatch] = useReducer(itemReucer, initialState);
  const { setAlert } = useContext(AlertContext);

  const setItems = (item) => {
    const mvs = state.items;
    let contains = false;

    for (let i = 0; mvs.length > i; i++) {
      if (mvs[i].name === item.name || mvs[i].id === item.id) {
        contains = true;
      }
    }

    if (!contains) {
      dispatch({
        type: ADD_ITEM,
        payload: item,
      });
    } else {
      setAlert('Error: This item is already on the list');
    }
  };

  const removeItem = (id) => {
    const itemsCopy = state.items;

    const filteredItems = itemsCopy.filter((obItem) => {
      return obItem.id !== id;
    });

    dispatch({
      type: REMOVE_ITEM,
      payload: filteredItems,
    });
  };

  return (
    <ItemContext.Provider value={{ items: state.items, setItems, removeItem }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemState;

//   return (
//     <itemContext.Provider value={{ items, setItems }}>
//       {/* Valor que vem do App.js */}
//       {/* Todos os componentes que tiverem dentro do ItemProvider */}
//       {props.children}
//     </itemContext.Provider>
//   );
// };
