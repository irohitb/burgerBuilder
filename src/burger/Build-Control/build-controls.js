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
  console.log("yahoo",props.disabled)
  return (
  <div className={Classes.BuildControls}>
    { controls.map(el =>(
      <BuildControl
       key={el.label}
       label={el.label}
       ingredientAdded={() => props.ingredientAdded(el.type)}
       removeIngredientHandler={() => props.removeIngredientHandler(el.type)}
       disabled={props.disabled[el.type]}
      />))}
  </div>
 )
};

export default buildControls;
