import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js'
import Burger from '../../burger/burger.js'

class BurgerBuilder extends Component {
state = {
    ingredient: {
      Salad: 1,
      Bacon: 1,
      Cheese: 1,
      meat: 2
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
