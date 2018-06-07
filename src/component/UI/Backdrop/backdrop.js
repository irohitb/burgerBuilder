import React from 'react';
import Classes from './backdrop.css'

const backdrop = (props) => {
  return (
    props.show ? <div className={Classes.Backdrop} onClick={props.purchasingHandlerClose}> </div> : null
  )
}

export default backdrop;
