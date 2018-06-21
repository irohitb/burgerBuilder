import React, { Component} from 'react';
import axios from 'axios';
import Modal from '../../component/UI/modal/modal.js'
import Aux from '../Aux.js'

const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
      state = {
        error:null
      }

    componentDidMount () {
      axios.interceptors.request.use(req => {
        this.setState({error:null})
      });
      axios.interceptors.response.use(res => {
        console.log(res)
      }, error => {
        console.log(error)
        this.setState({error:error})
         console.log(this.state.error.message)
      });
    }

    errorConfirmedHandler = () => {
      this.setStae({error: null})
    }

    render() {
      return (
        <Aux>
          <Modal
          order={this.state.error}
          purchasingHandlerClose={this.errorConfirmedHandler }>
            {this.state.error ? this.state.error.message : null}
          </Modal>
        <WrappedComponent {...this.props} />
      </Aux>
      );
    }
  }
}

export default ErrorHandler;
