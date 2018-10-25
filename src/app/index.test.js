import React from 'react';
import ReactDOM from 'react-dom';
import CityWeather from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CityWeather />, div);
  ReactDOM.unmountComponentAtNode(div);
});
