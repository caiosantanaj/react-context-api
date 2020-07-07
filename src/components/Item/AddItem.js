import React, { useState, useContext } from 'react';

import './AddItem.css';

import ItemContext from '../../context/item/itemContext';
import AlertContext from '../../context/alert/alertContext';
import Alert from '../layout/Alert';

const AddItem = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const { setItems } = useContext(ItemContext);
  const { setAlert } = useContext(AlertContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const whiteSpaceHandle = (itemName) => {
    return itemName.replace(/\s/g, '');
  };

  const addItem = (e) => {
    e.preventDefault();

    if (name === '') {
      setAlert('Error: Fields are empty');
    } else {
      setItems({
        id: whiteSpaceHandle(name) + '' + price,
        name: name,
        price: '$' + price,
      });
    }
  };

  return (
    <form className='item-form' onSubmit={addItem}>
      <input
        type='text'
        name='name'
        placeholder='Name of the item...'
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

export default AddItem;
