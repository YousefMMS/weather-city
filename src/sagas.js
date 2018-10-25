import { all, fork } from 'redux-saga/effects';
import {
  watchFetchWeather
} from './app/Pages/CityWeather/saga'

export default function* rootSaga() {
  yield all([fork(watchFetchWeather)]);
}
