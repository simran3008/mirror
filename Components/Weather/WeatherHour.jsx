import React, {Component} from 'react';
import './Weather.css';

class WeatherHour extends React.Component {
  render() {
    if(this.props){
      console.log(this.props.temp)
      let srcImg = this.props.temp.IsDaylight == true ? "./Components/Weather/sunny.png" : "./Components/Weather/moon.png"
      let date = new Date(this.props.temp.DateTime);
      let hour = (date.getHours() > 12) ? (date.getHours() + ":00 pm") : (date.getHours() + ":00 am");
      if(date.getHours() == 12){
        hour = "noon"
      }
      return (
        <div className="Flex-Container" key={"id_hour_"+date.getHours()} style={{color: 'white', margin: '20px'}} >
          <div style={{display: 'flex', marginBottom: '10px'}}>
            <div className="Font-Paragraph" style={{float: 'left', margin: '20px'}}>{hour}</div>
            <img style={{float: 'left'}} src={`${srcImg}`}></img>
            <div style={{margin: '20px'}} className="Font-Paragraph Align-Right">{this.props.temp.Temperature.Value} F</div>
          </div>
          <br/>
        </div>
      );
    }
    else {
      return(<div>Loading</div>);
    }
  }
}

export default WeatherHour
