import React from "react";
import Aux from "../../HOC/Aux.js"
import Button from "../UI/Button/button.js"

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.3,
  bacon: 0.6,
  meat: 0.8
}


const orderSummary = (props) => {
  const summary = Object.keys(props.ingredient)
            // [This should give "salad", "beacon"

  return (
    <Aux>
        <h3> Your order </h3>
        <p> Your burger contains the following item </p>
        <table>
        <tr>
          <th>Ingredients </th>
          <th> Quantity </th>
          <th> Price </th>
        </tr>
        {summary.map(el => (
          <tr>
            <td> <span style={{textTransform: 'capitalize'}}> {el} </span> </td>
            <td> {props.ingredient[el]} </td>
            <td> ${(props.ingredient[el] * INGREDIENT_PRICE[el]).toFixed(2)} </td>
          </tr>
        )
      )}
      </table>
      <p> Base Price <strong> $4 </strong> </p>
      <p> Your total amount would be <strong> ${props.totalPrice} </strong> </p>
        <p> Continue to Checkout?</p>
        <Button btnType="Danger"  clicked={props.purchasingHandlerClose}>Cancel </Button>
        <Button btnType="Success"  clicked={props.purchaseContinueHandler}> Order</Button>


    </Aux>
  )

};

export default orderSummary;
