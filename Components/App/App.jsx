import React, {Component} from 'react';
import Weather from '../Weather/Weather.jsx'
// import Weather from '../Weather/Weather.jsx'

const WEATHER_API= 'https://api.apixu.com/v1/forecast.json?key=f744a353ddf640788d641143181506&q=92128'

class App extends React.Component {

  render() {
    return (<div style={{backgroundColor: 'black', flex:1}}><Weather></Weather></div>)
  }
}

export default App
