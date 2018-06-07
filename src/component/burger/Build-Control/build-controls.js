import React from 'react';
import Classes from './build-controls.css';
import BuildControl from './build-control-r/build-control.js';

const controls = [
  { label: "Salad", type:"salad"  },
  { label: "Cheese", type:"cheese" },
  { label: "Meat", type:"meat" },
  { label: "bacon", type:"bacon" }
]


const buildControls = (props) => {
  console.log('build-controls-purchasableHandler',props.purchasableHandler)
  return (
  <div className={Classes.BuildControls}>
    <p> Your current Price is $ {props.price} </p>
    { controls.map(el =>(
      <BuildControl
       key={el.label}
       label={el.label}
       ingredientAdded={() => props.ingredientAdded(el.type)}
       removeIngredientHandler={() => props.removeIngredientHandler(el.type)}
       disabled={props.disabled[el.type]}
      />))}
      <button className={Classes.OrderButton} disabled={!props.purchasableHandler} onClick={props.purchasingHandlerOpen}>Order</button>
  </div>
 )
};

export default buildControls;
