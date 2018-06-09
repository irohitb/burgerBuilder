import React from 'react';
import Burgerlogo from '../../assests/burger-logo.png';
import Classes from './logo.css';

const logo = (props) => {
  return (
  <div className={Classes.logo} style={{height: props.height}}>
    <img src={Burgerlogo} alt="MyBurger"/>
  </div>
  )
}

export default logo;
