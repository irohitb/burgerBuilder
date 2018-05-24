import React from 'react'
import Aux from '../../HOC/Aux.js'
import classes from './layout.css'

const layout = (props) =>
   (
  <Aux>
    <div> toolbar, SideBar, SideDrawer </div>
    <main className={classes.Co}>
    {props.children}
    </main>
  </Aux>
  )

export default layout;
