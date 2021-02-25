import React, { Component } from 'react';
import { getData } from '../utils/api';
import Spinner from './layout/Spinner';
export default class APIResponse extends Component {
  state = {
    displayData: '',
    isLoading: true,
    error: false
  };
  async componentDidMount() {
    const backend_data = await getData();

    if (backend_data !== 'error') {
      this.setState({
        displayData: backend_data,
        isLoading: false
      });

    }
    else {
      this.setState({
        error: true,
        isLoading: false
      });
      // console.log('error')
    }
    // console.log(backend_data);
  }
  render() {
    const { isLoading, error } = this.state
    return (
      <section className='content' id='apiData'>
        {isLoading ? <Spinner /> : <p>{error ? 'Sorry, an error occured :(' : this.state.displayData}</p>}

      </section>
    );
  }
}
