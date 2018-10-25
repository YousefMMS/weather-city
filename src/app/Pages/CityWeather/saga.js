import { put, takeEvery, call } from 'redux-saga/effects'

import { ActionTypes } from './actions';
import { Weather } from './data-services/weather';

export function* fetchWeather(action) {
  yield put({ type: ActionTypes.FETCH_WEATHER_START, payload: {} });

  const { payload: { cityName } } = action;

  const result = yield call(Weather.getCityWeather, cityName);

  if (result.status === 'SUCCESS') {
    yield put({ type: ActionTypes.FETCH_WEATHER_DONE, payload: { weather: result.result } });
  } else {
    yield put({ type: ActionTypes.FETCH_WEATHER_ERROR, payload: { error: result.error } });
  }
}

export function* watchFetchWeather() {
  yield takeEvery(ActionTypes.FETCH_WEATHER, fetchWeather)
}
