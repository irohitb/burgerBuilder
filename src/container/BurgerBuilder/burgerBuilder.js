import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js';
import Burger from '../../burger/burger.js'
import BuildControls from '../../burger/Build-Control/build-controls.js';

class BurgerBuilder extends Component {
state = {
    ingredient: {
      salad: 2,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  }



  render () {
    return (
        <Aux>
          <Burger ingredient={this.state.ingredient}/>
           <BuildControls />
        </Aux>
    )
  }
}


export default BurgerBuilder;
