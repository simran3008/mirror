import React, {Component} from 'react';
import '../Weather/Weather.css';

const WEATHER_API= 'http://dataservice.accuweather.com/currentconditions/v1/92128?apikey=jbkZqu97Qd6P5GQEDw3ZlbRhRGIMIavn'

class CurrentWeather extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weather: null } ;
  }

  componentDidMount() {
    fetch(WEATHER_API)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({currentWeather: responseJson});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    if(this.state.currentWeather){
      return (
        <div className="Flex-Container" style={{display: 'flex', color: 'white'}}>
          <div style={{float: 'left'}}>
            <div className="Font-Paragraph-Big" style={{float: 'left', marginTop: '10px', marginRight: '20px'}}>
            San Diego
            </div>
            <div style={{float: 'left', marginTop: '10px'}} className="Font-Paragraph-Big">
              {this.state.currentWeather[0].Temperature.Imperial.Value}F
            </div>
          </div>
          <div>
          </div>
        </div>
      );
    }
    else {
      return(<div>Loading</div>);
    }
  }
}

export default CurrentWeather
