import React from 'react';
import Classes from './toolbar.css';
import Logo from '../../logo/logo.js';

const toolbar = (props) => {
  return (
    <header className={Classes.Toolbar}>
    <Logo />
    </header>
  )

}

export default toolbar;

//COmponents
//Button which opens the side drawer
//Which contains logo
//Which contains all the navigation links
