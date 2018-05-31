import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js'
import Burger from '../../burger/burger.js'

class BurgerBuilder extends Component {
state = {
    ingredient: {
      Salad: 2,
      Bacon: 4,
      Cheese: 2,
      meat: 1
    }
  }



  render () {
    return (
        <Aux>
          <Burger ingredient={this.state.ingredient}/>
          <div> Build controls </div>
        </Aux>
    )
  }
}


export default BurgerBuilder;
