import React from 'react'
import classes from './build-control.css'

const rbuildControl = (props) => {
    return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less}>less</button>
      <button className={classes.More} onClick={props.ingridentAdded}>More</button>
    </div>
   )
};

export default rbuildControl;
