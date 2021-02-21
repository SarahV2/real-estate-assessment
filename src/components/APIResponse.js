import React, { Component } from 'react'
import axios from 'axios';
export default class APIResponse extends Component {

    state={
        displayData:''
    }
    async componentDidMount(){
        const backend_data=await axios({
            method: 'get',
            url: 'http://localhost:5000/api/data',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        this.setState({
            displayData:backend_data.data.data
        })

        console.log(backend_data.data.data)
    }
    render() {
        return (
        <section className='content' id='apiData'>
          {this.state.displayData}
        </section>
        )
    }
}
