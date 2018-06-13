import React, { Component } from 'react';
import Aux from '../../HOC/Aux.js';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar.js'
import SideDrawer from '../navigation/sidedrawer/sidedrawer.js'

class Layout extends Component {

  state = {
    sidedrawer: true
  }

  sideDrawerCloseHandler = () => {
    console.log(this.state.sidedrawer)
    this.setState({sideDrawer: false})
  }


  render () {
      return (
        <Aux>
          <Toolbar />
          <SideDrawer SideDrawerOpen={this.state.sidedrawer} sideDrawerCloseHandler={this.sideDrawerCloseHandler}/>
          <main className={classes.Co}>
          {this.props.children}
          </main>
        </Aux>
      )
    }
  }

export default Layout;
