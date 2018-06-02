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
  return (
  <div className={Classes.BuildControls}>
    { controls.map(el =>(
      <BuildControl
       key={el.label}
       label={el.label}
       ingridentAdded={() => props.ingridentAdded(el.type)}
       removeIngredientHandler={() => props.removeIngredientHandler(el.type)}
      />))}
  </div>
 )
};

export default buildControls;
