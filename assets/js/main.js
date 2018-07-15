import * as pc from './polarClock.js?version=1.5.30';
import * as sm from './sideMenu.js?version=1.5.30';
import * as lang from './language_main.js?version=1.5.30';
import * as weather from './weather_main.js?version=1.5.30';
import * as inWin from './inWindow.js?version=1.5.30';
import * as http from './easyHTTP.js?version=1.5.30';

const ParallaxDesign = (() => {
  const app1_container = document.querySelector('#app-1_container');
  const app2_container = document.querySelector('#app-2_container');
  const app1_button = document.querySelector('#app-1_button');
  const app1_close = document.querySelector('#app-1_close');
  const app2_button = document.querySelector('#app-2_button');
  const app2_close = document.querySelector('#app-2_close');

  document.addEventListener('DOMContentLoaded', () => {
    console.warn('DOM Loaded ... JavaScript Initialized ...');
  });

  const loadEventListeners = () => {
    document.querySelector('.card').addEventListener('click', () => {
      document.querySelector('.card').classList.add('u_hide');
    })

    app1_button.addEventListener('click', toggleApp1);
    app1_close.addEventListener('click', toggleApp1);

    app2_button.addEventListener('click', toggleApp2);
    app2_close.addEventListener('click', toggleApp2);
  };

  const toggleApp1 = (even) => {
    if (app1_container.className === 'u_hide') {
      app1_container.classList.remove('u_hide');
      app1_container.classList.add('rotateIn');
    } else {
      app1_container.classList.remove('rotateIn');
      app1_container.classList.add('rotateOut');

      setTimeout(() => {
        app1_container.classList.remove('rotateOut');
        app1_container.classList.add('u_hide');
      }, 2000);
    }

    toggleAppButtons();
  };

  const toggleApp2 = () => {
    if (app2_container.className === 'u_hide') {
      app2_container.classList.remove('u_hide');
      app2_container.classList.add('rotateIn');
    } else {
      app2_container.classList.remove('rotateIn');
      app2_container.classList.add('rotateOut');

      setTimeout(() => {
        app2_container.classList.remove('rotateOut');
        app2_container.classList.add('u_hide');
      }, 2000);
    }

    toggleAppButtons();
  };

  const toggleAppButtons = () => {
    if (app1_button.style.display === 'none') {
      app1_button.style.display = 'inline-block';
      app2_button.style.display = 'inline-block';
    } else {
      app1_button.style.display = 'none';
      app2_button.style.display = 'none';
    }
  };

  const loadLangaugeApp = () => {
    let url = 'https://daniellandonjr.github.io/CodeLouisvilleFEWD_FinalProject/assets/includes/language.html';

    http.easyHTTP.get(url)
      .then((response) => {
        console.warn(`Absolute Pathing SUCCESS ... Language Localization Application Loaded \nURL Attempted => '${url}'`);
        document.querySelector('#app1_AJAX_content').innerHTML = response;
        lang.ApplicationLocalization.init();
      })
      .catch((error) => {
        console.warn(`Absolute Pathing FAILED TO LAUNCH ... Attempting Relative Pathing ... \nURL Attempted => '${url}'\nReturned Error => ${error}`);

        url = '../../assets/includes/language.html';
        http.easyHTTP.get(url)
          .then((response) => {
            console.warn(`Relative Pathing SUCCESS ... Language Localization Application Loaded \nURL Attempted => '${url}'`);
            document.querySelector('#app1_AJAX_content').innerHTML = response;
            lang.ApplicationLocalization.init();
          })
          .catch((error) => {
            console.warn(`Relative Pathing FAILED TO LAUNCH ...Application WILL NOT WORK ... \nURL Attempted => '${url}'\nReturned Error => ${error}`);
          });
      });
  };

  const loadWeatherApp = () => {
    let url = 'https://daniellandonjr.github.io/CodeLouisvilleFEWD_FinalProject/assets/includes/weather.html';

    http.easyHTTP.get(url)
      .then((response) => {
        console.warn(`Absolute Pathing SUCCESS ... Weather Underground Application Loaded \nURL Attempted => '${url}'`);
        document.querySelector('#app2_AJAX_content').innerHTML = response;
        weather.WeatherUnderground.init();
      })
      .catch((error) => {
        console.warn(`Absolute Pathing FAILED TO LAUNCH ... Attempting Relative Pathing ... \nURL Attempted => '${url}'\nReturned Error => ${error}`);

        url = '../../assets/includes/weather.html';
        http.easyHTTP.get(url)
          .then((response) => {
            console.warn(`Relative Pathing SUCCESS ... Weather Underground Application Loaded \nURL Attempted => '${url}'`);
            document.querySelector('#app2_AJAX_content').innerHTML = response;
            weather.WeatherUnderground.init();
          })
          .catch((error) => {
            console.warn(`Relative Pathing FAILED TO LAUNCH ...Application WILL NOT WORK ... \nURL Attempted => '${url}'\nReturned Error => ${error}`);
          });
      });
  };

  // public methods
  return {
    init: () => {
      sm.SideMenu.init();

      pc.PolarClock.init(300);

      loadLangaugeApp();

      loadWeatherApp();

      inWin.InWindow.init();

      loadEventListeners();
    }
  }
})();

ParallaxDesign.init();
