import React, { Component } from 'react';
import { getData } from '../utils/api';
export default class APIResponse extends Component {
  state = {
    displayData: '',
  };
  async componentDidMount() {
    const backend_data = await getData();

    if (backend_data !== 'error') {
      this.setState({
        displayData: backend_data,
      });
    }
    console.log(backend_data);
  }
  render() {
    return (
      <section className='content' id='apiData'>
        <p> {this.state.displayData}</p>
      </section>
    );
  }
}
