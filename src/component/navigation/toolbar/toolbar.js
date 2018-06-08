import React from 'react';
import Classes from './toolbar.css';
import Logo from '../../logo/logo.js';
import Navitems from '../navigation-items/navigation-items.js';

const toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
    <div> Menu </div>
    <Logo />
    <Navitems />
    </header>
  )

}

export default toolbar;

//COmponents
//Button which opens the side drawer
//Which contains logo
//Which contains all the navigation links
