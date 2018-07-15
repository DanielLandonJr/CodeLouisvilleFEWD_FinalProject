export const UI = (() => {
  // public methods
  return {
    paint: (weather) => {
      let wind_string = `Wind: From the ${weather.wind_dir} @ ${weather.wind_mph} MPH, Gusting to ${weather.wind_gust_mph} MPH`;

      document.querySelector('#weather_data-location').textContent = weather.display_location.full;
      document.querySelector('#weather_data-description').textContent = weather.weather;
      document.querySelector('#weather_data-string').textContent = weather.temperature_string;
      document.querySelector('#weather_data-icon').setAttribute('src', weather.icon_url);
      document.querySelector('#weather_data-time').textContent = new Date();
      document.querySelector('#weather_data-humidity').textContent = `Relative Humidity: ${weather.relative_humidity}`;
      document.querySelector('#weather_data-dewPoint').textContent = `Dew Point: ${weather.dewpoint_string}`;
      document.querySelector('#weather_data-feelsLike').textContent = `Feels Like: ${weather.feelslike_string}`;
      document.querySelector('#weather_data-wind').textContent = wind_string;
    },
    clearLocationFields: () => {
      document.querySelector('#weather_city').value = "";
      document.querySelector('#weather_state').value = '';
    },
    clearMessage: () => {
      document.querySelector('#weather_message-text').value = '';
      document.querySelector('#weather_message').style.display = 'none';
    },
    showMessage: (message) => {
      document.querySelector('#weather_message-text').innerHTML = message;
      document.querySelector('#weather_message').style.display = 'grid';
    },
    toggleDataDisplay: () => {
      let xTag = document.querySelector('#weather_display-data');

      if (xTag.style.display === 'none') {
        // show it
        xTag.style.display = 'grid';
      } else {
        // hide it
        xTag.style.display = 'none';
      }
    },
    toggleChangeLocation: () => {
      let xTag = document.querySelector('#weather_change-location');

      if (xTag.style.display === 'none') {
        // show it
        xTag.style.display = 'grid';
      } else {
        // hide it
        xTag.style.display = 'none';
      }
    },
    hideEveryThing: () => {
      document.querySelector('#weather_change-location').style.display = 'none';
      document.querySelector('#weather_message').style.display = 'none';
      document.querySelector('#weather_display-data').style.display = 'none';
    }
  }
})();