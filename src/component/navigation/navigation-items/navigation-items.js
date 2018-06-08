import React from 'react';
import Classes from './navigation-items.css'
import Navitem from './navigation-items-list/nav-items.js'

const navitems = (props) => {
  return (
    <ul className={Classes.NavigationItems}>
      <Navitem link="/" active> Burger Builder </Navitem>
      <Navitem link="/"> Check Out </Navitem>
    </ul>
  )
}

export default navitems;
