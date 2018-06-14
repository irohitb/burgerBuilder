import React from 'react';
import Classes from './toolbar.css';
import Logo from '../../logo/logo.js';
import Navitems from '../navigation-items/navigation-items.js';

const toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
      <div className={Classes.SideDrawerVisibility}>
        <button onClick={props.sideDrawerTogglerHandler}> Click Me </button>
      </div>
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
