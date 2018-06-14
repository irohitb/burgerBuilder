import React from 'react';
import Classes from './toolbar.css';
import Logo from '../../logo/logo.js';
import Navitems from '../navigation-items/navigation-items.js';
import DrawToggler from '../sidedrawer/drawtoggler/drawtoggler.js';

const toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
      <DrawToggler sideDrawerToggler={props.sideDrawerTogglerHandler} />
      <div className={Classes.Logo}>
        <Logo height="100%"/>
      </div>
      <nav className={Classes.DesktopOnly}>
        <Navitems />
      </nav>
    </header>
  )

}

export default toolbar;

//COmponents
//Button which opens the side drawer
//Which contains logo
//Which contains all the navigation links
