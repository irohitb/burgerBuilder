import React from 'react';
import Logo from '../../logo/logo.js';
import Navitems from '../navigation-items/navigation-items.js';
import Classes from './sidedrawer.css';


const sidedrawer = (props) => {
  return (
      <div className={Classes.sidedrawer}>
        <Logo />
        <nav>
          <Navitems />
        </nav>
      </div>

  )
}

export default sidedrawer;
