import React, {Component} from 'react';
import './Weather.css';

const WEATHER_API= 'https://api.apixu.com/v1/forecast.json?key=f744a353ddf640788d641143181506&q=92128'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: null } ;
  }

  componentDidMount() {
    fetch(WEATHER_API)
    .then((response) => response.json())
    .then((responseJson) => {
      debugger;
      this.setState({weather: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if(this.state.weather){
      const weather_data = this.state.weather;
      return (
        <div style={{color: 'white', position: 'absolute', margin: '5px'}} >
          <div style={{marginBottom: '15px'}} className="Font-Heading">
            {weather_data.location.name}
          </div>
          <div>
            <img src="./Components/Weather/moon.png"></img>
            <div className="Font-Paragraph">{weather_data.forecast.forecastday.day.mintemp_c} C</div>
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
