import React from 'react';
import Classes from './button.css';

const button = (props) => {
  return (
    <button onClick={props.purchasingHandlerClose}
    className={[Classes.Button, Classes[props.btnType]].join(' ')}>
    {props.children}
    </button>

  )
}

export default button;
