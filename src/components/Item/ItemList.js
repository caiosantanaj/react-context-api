import React, { useContext, Fragment } from 'react';

import Item from './Item';
import ItemContext from '../../context/item/itemContext';

const ItemList = () => {
  const itemContext = useContext(ItemContext);
  const { items } = itemContext;

  return (
    <Fragment>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Fragment>
  );
};

export default ItemList;
