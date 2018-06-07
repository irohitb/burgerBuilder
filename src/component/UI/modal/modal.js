import React from 'react';
import Classes from './modal.css'
import Aux from '../../../HOC/Aux.js'
import Backdrop from '../Backdrop/backdrop.js'

const modal = (props) => {
  console.log(props.order)
  return (
    <Aux>
    <Backdrop show={props.order} purchasingHandlerClose={props.purchasingHandlerClose} />
  <div className={Classes.Modal} style={{display: props.order ? 'block' : 'none'}}>
    {props.children}
  </div>
  </Aux> )
}

export default modal;
