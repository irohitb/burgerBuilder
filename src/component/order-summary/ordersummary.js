import React from "react";
import Aux from "../../HOC/Aux.js"

const orderSummary = (props) => {


  const summary = Object.keys(props.ingredient) // [This should g

  return (
    <Aux>
        <h3> Your order </h3>
        <p> Your burger contains the following item </p>
        <ul>
        {summary.map(el => (
          <li> <span style={{textTransform: 'capitalize'}}>{el}</span>: {props.ingredient[el]} </li>
        )
      )}
      </ul>
        <p> Continue to Checkout?</p>
        <button> Checkout </button>
    </Aux>
  )

};

export default orderSummary;
