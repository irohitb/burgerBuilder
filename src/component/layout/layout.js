import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar.js'
import SideDrawer from '../navigation/sidedrawer/sidedrawer.js'

class Layout extends Component {

  state = {
    sidedrawer: false
  }

  sideDrawerCloseHandler = () => {
    this.setState({sidedrawer: false})
  }

  sideDrawerTogglerHandler = () => {
    this.setState((prevState) => ({
      sidedrawer: !prevState.sidedrawer
    }));
  }


  render () {
      return (
        <Aux>
          <Toolbar sideDrawerTogglerHandler={this.sideDrawerTogglerHandler}/>
          <SideDrawer SideDrawerOpen={this.state.sidedrawer} sideDrawerCloseHandler={this.sideDrawerCloseHandler} />
          <main className={classes.co}>
          {this.props.children}
          </main>
        </Aux>
      )
    }
  }

export default Layout;
