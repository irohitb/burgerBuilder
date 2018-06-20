import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js';
import Burger from '../../component/burger/burger.js'
import BuildControls from '../../component/burger/Build-Control/build-controls.js';
import Modal from '../../component/UI/modal/modal'
import OrderSummary from '../../component/order-summary/ordersummary.js'


const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.3,
  bacon: 0.6,
  meat: 0.8
}

//let purchasable = false;

class BurgerBuilder extends Component {
  state = {
      ingredient: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    }

  purchasableHandle = (ingredient) => {
    let ppurchasable = Object.keys(ingredient) // this should log ["salad",'bacon','cheese']
    ppurchasable = ppurchasable.map((el) => {
      return ingredient[el] //this shoudl log ("0", "0", "0")
    })
    ppurchasable = ppurchasable.reduce((total, amount) => {

       return total+amount;
    },0);
    this.setState({purchasable: ppurchasable > 0});
    }



  addIngredientHandler = (type) => {

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
    this.purchasableHandle(updatedingredients)

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
      this.purchasableHandle(updatedingredients)

  }

  purchasingHandlerOpen =  () =>  {
    return (
      this.setState({purchasing: true})
    )
  }

  purchasingHandlerClose = () => {
    this.setState({purchasing: false})
  }

  purchaseContinueHandler = () => {
    alert("You Continue")
  }


  render () {

    const disabledInfo = {
      ...this.state.ingredient
    }

      for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
      }

    //    if (this.state.totalPrice == 4) {
    //      purchasable = true;
    //      console.log("tt:",purchasable)
    //    } else {
    //      purchasable = false;
    //    }

    return (
        <Aux>
          <Modal order={this.state.purchasing} purchasingHandlerClose={this.purchasingHandlerClose}>
          <OrderSummary ingredient={this.state.ingredient} purchasingHandlerClose={this.purchasingHandlerClose} purchaseContinueHandler={this.purchaseContinueHandler} totalPrice={this.state.totalPrice}/>
          </Modal>
          <Burger ingredient={this.state.ingredient}/>
           <BuildControls
           price={this.state.totalPrice.toFixed(2)}
           ingredientAdded={this.addIngredientHandler} removeIngredientHandler={this.removeIngredientHandler}
           disabled={disabledInfo}
           purchasingHandlerOpen={this.purchasingHandlerOpen}
           purchasableHandler={this.state.purchasable} />
        </Aux>
    )
  }
}


export default BurgerBuilder;
