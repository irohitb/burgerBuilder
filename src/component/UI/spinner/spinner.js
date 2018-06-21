import React from 'react'
import Classes from './spinner.css'

const spinner = (props) => {
return (<div className={Classes.Loader}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>)
}

export default spinner
