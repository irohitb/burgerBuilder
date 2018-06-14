import React from 'react';
import Classes from './drawtoggler.css'

const drawToggler = (props) => {
  return (
    <div className={Classes.DrawerToggler} onClick={props.sideDrawerToggler}>
    <div> </div>
    <div> </div>
    <div> </div>
    </div>

  )
}
export default drawToggler;
