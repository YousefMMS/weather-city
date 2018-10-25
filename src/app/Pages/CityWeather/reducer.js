
import { ActionTypes } from './actions';

export const cityWeather = (state = {}, action) => {
  console.log(action);

  switch (action.type) {
    case ActionTypes.FETCH_WEATHER:
      const { payload: { cityName } } = action;

      return { ...state, cityName };

    case ActionTypes.FETCH_WEATHER_START:
      return { ...state, weatherStatus: 'LOADING' };

    case ActionTypes.FETCH_WEATHER_DONE:
      const { payload: { weather } } = action;

      return { ...state, weatherStatus: 'DONE', weather };

    case ActionTypes.FETCH_WEATHER_ERROR:
      const { payload: { error } } = action;
      return { ...state, weatherStatus: 'ERROR', error };

    default:
      return state;
  }
}
