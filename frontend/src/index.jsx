/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getSensorsFromBackend = async () => {
  try {
    const url = `${baseURL}/api/sensors`
    console.log("Getting sensor data from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return {results: []};
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sensors: [],
    };
  }

  async componentWillMount() {
    const response = await getSensorsFromBackend();
    this.setState({sensors: response.results});
  }

  render() {

    return (
      <ul>
        {this.state.sensors.map(sensor => <li key={sensor.id}>{sensor.timestamp}</li>)}
      </ul>
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
