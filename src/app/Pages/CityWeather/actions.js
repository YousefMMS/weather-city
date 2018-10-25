

/*
 * action types
 */

export const ActionTypes = {
  FETCH_WEATHER: 'FETCH_WEATHER',
  FETCH_WEATHER_START: 'FETCH_WEATHER_START',
  FETCH_WEATHER_DONE: 'FETCH_WEATHER_DONE',
  FETCH_WEATHER_ERROR: 'FETCH_WEATHER_ERROR'
}

/*
 * action creators
 */

export const fetchWeather = (cityName) => ({
  type: ActionTypes.FETCH_WEATHER,
  payload: { cityName }
});
