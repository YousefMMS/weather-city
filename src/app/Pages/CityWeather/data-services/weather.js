import { config } from '../../../../config/prod.config'

export class Weather {
  static async getCityWeather(cityName) {
    try {
      const response = await fetch(`${config.weatherApiEndpoint}data/2.5/weather?q=${cityName}&appid=${config.weatherApiAppId}&units=metric`);
      const result = await response.json();

      if (response.status === 200) {
        return {
          status: 'SUCCESS',
          result
        };
      } else if (response.status === 404) {
        return {
          status: 'FAILED',
          error: 'The city you requested not found, please try different city.'
        };
      } else {
        return {
          status: 'FAILED',
          error: 'Unexpected error occurred.'
        };
      }

    } catch (error) {
      console.log(error);
      return {
        status: 'FAILED',
        error: 'Unexpected error occurred.'
      };
    }
  }
}