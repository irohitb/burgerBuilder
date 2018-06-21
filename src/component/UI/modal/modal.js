import React, { Component } from 'react';
import Classes from './modal.css'
import Aux from '../../../HOC/Aux.js'
import Backdrop from '../Backdrop/backdrop.js'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {

    return  nextProps.order !== this.props.order || nextProps.children !== this.props.children;
  }

  render () {
  
    return (
      <Aux>
      <Backdrop show={this.props.order} purchasingHandlerClose={this.props.purchasingHandlerClose} />
    <div className={Classes.Modal} style={{display: this.props.order ? 'block' : 'none'}}>
      {this.props.children}
    </div>
    </Aux> )
  }
}

export default Modal;
