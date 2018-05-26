import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js'
import Burger from '../../burger/burger.js'

class BurgerBuilder extends Component {
  render () {
    return (
        <Aux>
          <Burger />
          <div> Build controls </div>
        </Aux>
    )
  }
}


export default BurgerBuilder;
