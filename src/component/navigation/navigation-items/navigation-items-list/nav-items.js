import React from 'react';
import Classes from './nav-items.css';

const navitem = (props) => {
  return (
    <li className={Classes.NavigationItem}>
    <a href={props.link} className={props.active ? Classes.active : null }>  {props.children} </a>
     </li>
  )
}

export default navitem;
