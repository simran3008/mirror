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
        <div style={{color: 'white'}} >
          <div className="Font-Heading">
            {weather_data.location.name}
          </div>
          <div className="Font-Paragraph">
            {weather_data.current.condition.text}
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
