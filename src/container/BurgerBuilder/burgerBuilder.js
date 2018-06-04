import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js';
import Burger from '../../burger/burger.js'
import BuildControls from '../../burger/Build-Control/build-controls.js';

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.3,
  bacon: 0.6,
  meat: 0.8
}

class BurgerBuilder extends Component {
state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

addIngredientHandler = (type) => {

  console.log(type)
  const oldCount = this.state.ingredient[type] //this shold log the value or the property next to it. for example 1 or 2
  const updatedCount = oldCount + 1; //this should add one to whatever the count is
  let updatedingredients = {
    ...this.state.ingredient
  };
  updatedingredients[type] = updatedCount;
  const ingredientPrice = INGREDIENT_PRICE[type]
  const  totalPrice = this.state.totalPrice
  const newPrice = totalPrice + ingredientPrice
  this.setState({totalPrice: newPrice, ingredient: updatedingredients});
}



removeIngredientHandler = (type) => {

  const oldCount = this.state.ingredient[type]
  if (oldCount <= 0) {
    //Our code works without this as well
    return;
  }
  const updatedCount = oldCount - 1;
  let updatedingredients = {
    ...this.state.ingredient
  };
  updatedingredients[type] = updatedCount;
  const ingredientPrice = INGREDIENT_PRICE[type]
  const  totalPrice = this.state.totalPrice
  const newPrice = totalPrice - ingredientPrice
  this.setState({totalPrice: newPrice, ingredient: updatedingredients});

}

  render () {
    const disabledInfo = {
      ...this.state.ingredient
    }

      for (let key in disabledInfo) {

        disabledInfo[key] = disabledInfo[key] <= 0
      }



    return (
        <Aux>
          <Burger ingredient={this.state.ingredient}/>
           <BuildControls
           price={this.state.totalPrice.toFixed(2)}
           ingredientAdded={this.addIngredientHandler} removeIngredientHandler={this.removeIngredientHandler}
           disabled={disabledInfo}/>
        </Aux>
    )
  }
}


export default BurgerBuilder;
