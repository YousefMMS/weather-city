import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchForm from './components/SearchForm/index';
import Weather from './components/Weather/index';

import { fetchWeather } from './actions';

import './index.css';

class CityWeather extends Component {

  newCitySubmitted = (cityName) => {
    this.props.fetchWeather(cityName);
  }

  renderWeather = (weatherStatus, weather, error) => {
    if (weatherStatus === 'LOADING') {
      return <div>Loading...</div>;
    } else if (weatherStatus === 'DONE') {
      return <Weather temperature={weather.main.temp} icon={weather.weather[0].icon} />;
    } else if (weatherStatus === 'ERROR') {
      return <div className="error">
        <div className="title">Error while loading weather! :(</div>
        <div className="message">{error}</div>
      </div>;
    }
  }

  render() {
    return (
      <div className="CityWeather">
        <SearchForm onCitySubmitted={this.newCitySubmitted} />

        {this.renderWeather(this.props.weatherStatus, this.props.weather, this.props.error)}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather
};

const mapStateToProps = (state) => {
  return {
    weather: state.cityWeather.weather,
    weatherStatus: state.cityWeather.weatherStatus,
    error: state.cityWeather.error
  };
};

// export default CityWeather;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityWeather);
