import React, { useReducer } from 'react';

import { SET_ALERT, REMOVE_ALERT } from '../types';

import AlertContext from './alertContext';
import AlertReducer from './alertReducer';

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg) => {
    dispatch({
      type: SET_ALERT,
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 4 * 1000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
