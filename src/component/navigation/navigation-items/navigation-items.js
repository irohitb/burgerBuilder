import React from 'react';
import Classes from './navigation-items.css'
import Navitems from './navigation-items-list/nav-items.js'

const navitems = (props) => {
  return (
    <ul className={Classes.NavigationItems}>
      <Navitems link="/" active> Burger Builder </Navitems>
      <Navitems link="/"> Check Out </Navitems>
    </ul>
  )
}

export default navitems;
