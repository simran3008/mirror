import React, {Component} from 'react';
import './Weather.css';

class WeatherHour extends React.Component {
  render() {
    if(this.props){
      let srcImg = this.props.temp.IsDaylight == true ? "./Components/Weather/sunny1.png" : "./Components/Weather/moon1.png"
      let date = new Date(this.props.temp.DateTime);
      let hour = (date.getHours() > 12) ? (date.getHours() + ":00 pm") : (date.getHours() + ":00 am");
      if(date.getHours() == 12){
        hour = "noon"
      }
      return (
        <div className="Flex-Container" key={"id_hour_"+date.getHours()} style={{color: 'white', marginLeft: '40px', marginRight: '20px'}} >
          <div style={{display: 'flex'}}>
            <div className="Font-Paragraph" style={{float: 'left', marginTop: '10px', marginRight: '20px'}}>{hour}</div>
            <img style={{float: 'left', height: '32px', width: '32px'}} src={`${srcImg}`}></img>
            <div style={{marginTop: '10px', marginLeft: '20px'}} className="Font-Paragraph Align-Right">{this.props.temp.Temperature.Value} F</div>
          </div>
        </div>
      );
    }
    else {
      return(<div>Loading</div>);
    }
  }
}

export default WeatherHour
