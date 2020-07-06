import React, { useContext } from 'react';

import '../../App.css';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  return alert !== null && <div className='Alert'>{alert.msg}</div>;
};

export default Alert;
