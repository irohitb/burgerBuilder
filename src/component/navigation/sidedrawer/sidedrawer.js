import React from 'react';
import Logo from '../../logo/logo.js';
import Navitems from '../navigation-items/navigation-items.js';
import Classes from './sidedrawer.css';
import Backdrop from '../../UI/Backdrop/backdrop.js'
import Aux from '../../../HOC/Aux'


const sidedrawer = (props) => {
  let attachedClasses = [Classes.sidedrawer, Classes.close]
  console.log(props.SideDrawerOpen)
  if (props.SideDrawerOpen) {
      let attachedClasses = [Classes.sidedrawer, Classes.open]
  }
  return (
    <Aux>
      <Backdrop show={props.SideDrawerOpen} purchasingHandlerClose={props.sideDrawerCloseHandler}/>
      <div className={attachedClasses.join('')}>
        <Logo height="11%" />
        <nav>
          <Navitems />
        </nav>
      </div>
    </Aux>
  )
}

export default sidedrawer;
