$(document).ready(function(){
  $('.modal').modal();
});

let Weather_Storage_Ctrl = (() => {
  let city = '';
  let state = '';
  const defaultCity = 'new albany';
  const defaultState = 'in';
  let locationData = '';

  // public methods
  return {
    getLocationData: () => {
      // any data in localstorage
      if (localStorage.getItem('weatherUnderGround') === null) {
        // localstorage empty, set to default values
        city = defaultCity;
        state = defaultState;

        // call this t oset lcoation to local storage
        Weather_Storage_Ctrl.setLocationData(city, state);
      } else {
        locationData = JSON.parse(localStorage.getItem('weatherUnderGround'));
        city = locationData.city;
        state = locationData.state;
      }

      return {
        city,
        state
      };
    },
    setLocationData: (city, state) => {
      // set weather object in localstorage
      locationData = {
        "city": city,
        "state": state
      };

      localStorage.setItem('weatherUnderGround', JSON.stringify(locationData));
    }
  }
})();

let Weather_UI_Ctrl = (() => {
  let wind_string = '';

  // public methods
  return {
    paint: (weather) => {
      document.querySelector('#weather-location').textContent = weather.display_location.full;
      document.querySelector('#weather-description').textContent = weather.weather;
      document.querySelector('#weather-string').textContent = weather.temperature_string;
      document.querySelector('#weather-icon').setAttribute('src', weather.icon_url);
      document.querySelector('#weather-time').textContent = new Date();
      document.querySelector('#weather-humidity').textContent = `Relative Humidity: ${ weather.relative_humidity }`;
      document.querySelector('#weather-dewPoint').textContent = `Dew Point: ${ weather.dewpoint_string }`;
      document.querySelector('#weather-feelsLike').textContent = `Feels Like: ${ weather.feelslike_string }`;
      wind_string = `Wind: From the ${ weather.wind_dir } @ ${ weather.wind_mph } MPH, Gusting to ${ weather.wind_gust_mph } MPH`;
      document.querySelector('#weather-wind').textContent = wind_string;
    }
  }
})();

let Weather_Weather_Ctrl = (() => {
  const apiKey = '5a1b209e966659bb';

  // public methods
  return {
    getWeather: async (city, state) => {
      const response = await fetch(`http://api.wunderground.com/api/${ apiKey }/conditions/q/${ state }/${ city }.json`);

      const responseData = await response.json();

      return responseData.current_observation;
    }
  }
})();

let Weather_App = ((Weather_Storage_Ctrl, Weather_UI_Ctrl, Weather_Weather_Ctrl) => {
  let location = '';
  let setCity = '';
  let setState = '';

  // load event listeners
  const loadEventListeners = () => {
    document.querySelector('#setLocation').addEventListener('click', updateLocation);
  }

  const updateLocation = (event) => {
    event.preventDefault();

    console.log('click');
    // update local storage
    setCity = document.querySelector('#city').value;
    setState = document.querySelector('#state').value;
    Weather_Storage_Ctrl.setLocationData(setCity, setState);

    // get location data
    location = Weather_Storage_Ctrl.getLocationData();

    // get weather information
    getWeather(location.city, location.state);

    // clear fields
    document.querySelector('#city').textContent = '';
    document.querySelector('#state').textContent = '';

    // close modal
    $('#modal1').modal('close');
  };

  const getWeather = (city, state) => {
    const weather = Weather_Weather_Ctrl.getWeather(location.city, location.state)
      .then((response) => Weather_UI_Ctrl.paint(response))
      .catch((error) => console.log(error));
  }

  // public methods
  return {
    init: () => {
      // get location data
      location = Weather_Storage_Ctrl.getLocationData();

      // get weather information
      getWeather(location.city, location.state);

      // load event listeners
      loadEventListeners();
    }
  }
})(Weather_Storage_Ctrl, Weather_UI_Ctrl, Weather_Weather_Ctrl);

// initialize the application
Weather_App.init();