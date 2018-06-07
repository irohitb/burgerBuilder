import React from 'react';
import Aux from '../../HOC/Aux.js';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/toolbar.js'

const layout = (props) =>
   (
  <Aux>
    <Toolbar> toolbar, SideBar, SideDrawer </Toolbar>
    <main className={classes.Co}>
    {props.children}
    </main>
  </Aux>
  )

export default layout;
