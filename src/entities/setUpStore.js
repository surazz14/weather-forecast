import WeatherCollection from './weatherCollection/weatherCollection'
const store = {
  weatherCollection: WeatherCollection.create({}),
};

window.app = store;

export default store;
