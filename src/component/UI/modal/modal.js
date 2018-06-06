import React from 'react';
import Classes from './modal.css'

const modal = (props) => {
  return (
  <div className={Classes.Modal}>
    {props.children}
  </div> )
}

export default modal;
