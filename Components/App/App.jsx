import React, {Component} from 'react';
import Weather from '../Weather/Weather.jsx'
import CurrentWeather from '../Current/CurrentWeather.jsx'

const WEATHER_API= 'https://api.apixu.com/v1/forecast.json?key=f744a353ddf640788d641143181506&q=92128'

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{backgroundColor: 'black', height:'100%'}}><Weather></Weather>
        </div>
        <div style={{backgroundColor: 'black', height:'100%', marginBottom: '10px'}}>
          <CurrentWeather></CurrentWeather>
        </div>
      </div>
    )
  }
}

export default App
