import React from 'react'
import Aux from '../../HOC/Aux.js'

const layout = (props) => (
  <Aux>
  <div> toolbar, SideBar, SideDrawer </div>
  <main>
  {props.children}
  </main>
  </Aux>

)
