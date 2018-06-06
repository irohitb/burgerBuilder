import React from 'react';
import Classes from './modal.css'

const modal = (props) => {
  console.log(props.order)
  return (
  <div className={Classes.Modal} style={{display: props.order ? 'block' : 'none'}}>
    {props.children}
  </div> )
}

export default modal;
