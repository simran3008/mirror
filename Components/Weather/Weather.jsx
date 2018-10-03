import React, {Component} from 'react';
import './Weather.css';
import WeatherHour from './WeatherHour.jsx'

const WEATHER_API= 'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/92128?apikey=jbkZqu97Qd6P5GQEDw3ZlbRhRGIMIavn'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null } ;
  }

  componentDidMount() {
    fetch(WEATHER_API)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({weather: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if(this.state.weather){
      this.state.weather = this.state.weather.splice(0,6);
      const weatherHour = this.state.weather.map((hour) => {
        return (<div><WeatherHour temp={hour}></WeatherHour></div>)
      });
      return (
        <div style={{color: 'white'}} >
          <div className="Font-Paragraph-Big" style={{marginLeft:'20px', marginBottom: '10px'}}>
            Today's Forecast
          </div>
          <div>
            {weatherHour}
          </div>
        </div>
      );
    }
    else {
      return(<div>Loading</div>);
    }
  }
}

export default Weather
