import * as Storage_Ctrl from './weather_storage.js';
import * as UI_Ctrl from './weather_ui.js';
import * as Weather_Ctrl from './weather_weather.js';

export const WeatherUnderground = (() => {
  let location = '';

  // load event listeners 
  const loadEventListeners = () => {
    // set location when user clicks 'save changes' button
    document.querySelector('#weather_set-location').addEventListener('click', updateLocation);

    // close change location
    document.querySelector('#weather_close-location').addEventListener('click', closeChangeLocation);

    // open change location
    document.querySelector('#weather_data-location').addEventListener('click', openChangeLocation);
  }

  const closeChangeLocation = () => {
    // show data display
    UI_Ctrl.UI.toggleDataDisplay();
    // hide change location
    UI_Ctrl.UI.toggleChangeLocation();

    UI_Ctrl.UI.clearMessage();
  };

  const openChangeLocation = () => {
    // hide display data
    UI_Ctrl.UI.toggleDataDisplay();
    // show change location
    UI_Ctrl.UI.toggleChangeLocation();

    UI_Ctrl.UI.showMessage('Select a new city and state to display.');
  };

  const updateLocation = (event) => {
    event.preventDefault();

    let setCity = document.querySelector('#weather_city').value;
    let setState = document.querySelector('#weather_state').value;

    // validation checking, make sure fields are not empty
    if (setCity !== '' && setState !== '') {
      // update local storage
      Storage_Ctrl.Storage.setLocationData(setCity, setState);

      // get location data
      location = Storage_Ctrl.Storage.getLocationData();

      // hide everything
      UI_Ctrl.UI.hideEveryThing();
      UI_Ctrl.UI.clearMessage();

      // get weather information
      getWeather(location.city, location.state);
    } else {
      // no values supplied
      UI_Ctrl.UI.showMessage('Please Supply a City and State.');
    }

    // clear fields
    UI_Ctrl.UI.clearLocationFields();
  };

  const getWeather = (city, state) => {
    const weather = Weather_Ctrl.Weather.getWeather(location.city, location.state)
      .then((response) => {
        if (response !== undefined) {
          // valid data returned

          // paint the ui with returned data
          UI_Ctrl.UI.paint(response);

          // show data display
          UI_Ctrl.UI.toggleDataDisplay();
        } else {
          // invalid data returned
          UI_Ctrl.UI.showMessage('Invalid data returned from Weather Underground. Please set City & State location.');

          setTimeout(() => {
            UI_Ctrl.UI.clearMessage();
          }, 3000);

          // show change location
          UI_Ctrl.UI.toggleChangeLocation();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // public methods
  return {
    init: () => {
      UI_Ctrl.UI.hideEveryThing();

      // get location data
      location = Storage_Ctrl.Storage.getLocationData();

      // get weather information
      getWeather(location.city, location.state);

      // load event listeners
      loadEventListeners();
    }
  }
})();