import
React, {
  Component
} from 'react';

import './index.css';

class Weather extends Component {

  render() {
    const iconUrl = `https://openweathermap.org/img/w/${this.props.icon}.png`;
    const temperature = this.props.temperature;
    return (
      <div className="Weather">
        <div className="temperature-icon">
          <img  src={iconUrl} alt="" width="50" height="50"></img>
        </div>
        <div className="temperature-degree">{temperature} °C</div>
      </div>
    );
  }
}

export default Weather;
