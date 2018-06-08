import React from 'react';
import Aux from '../../HOC/Aux.js';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar.js'
import SideDrawer from '../navigation/sidedrawer/sidedrawer.js'

const layout = (props) =>
   (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Co}>
    {props.children}
    </main>
  </Aux>
  )

export default layout;
