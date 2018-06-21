import React, { Component} from 'react';
import Modal from '../../component/UI/modal/modal.js'
import axios from 'axios'
import Aux from '../Aux.js'

const ErrorHandler = (WrappedComponent) => {
  return class something extends Component {
      state = {
        error:null
      }

    componentWillMount () {
      axios.interceptors.request.use(req => {
        this.setState({error:null})
        return req
      });
      axios.interceptors.response.use(res => {
        console.log(res)
        return res
      }, error => {
        console.log(error)
        this.setState({error:error})
         console.log(this.state.error.message)
      });
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <Aux>
          <Modal
            order={this.state.error}
            purchasingHandlerClose={this.errorConfirmedHandler}>
              {this.state.error ? this.state.error.message : null}
          </Modal>
        <WrappedComponent {...this.props} />
      </Aux>
      );
    }
  }
}

export default ErrorHandler;
