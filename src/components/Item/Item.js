import React, { useContext } from 'react';

import './Item.css';
import ItemContext from '../../context/item/itemContext';

const Item = (props) => {
  const { removeItem } = useContext(ItemContext);
  const { id, name, price } = props.item;

  return (
    <p>
      <b>{name}:</b> {price}{' '}
      <button className='button-delete' onClick={() => removeItem(id)}>
        X
      </button>
    </p>
  );
};

export default Item;
