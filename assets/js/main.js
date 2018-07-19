import * as pc from './polarClock.js?version=1.5.35';
import * as sm from './sideMenu.js?version=1.5.35';
import * as lang from './language_main.js?version=1.5.35';
import * as weather from './weather_main.js?version=1.5.35';
import * as inWin from './inWindow.js?version=1.5.35';
import * as http from './easyHTTP.js?version=1.5.35';

const ParallaxDesign = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.warn('DOM Loaded ... JavaScript Initialized ...');
  });

  const loadEventListeners = () => {
    document.querySelector('.card').addEventListener('click', () => {
      document.querySelector('.card').classList.add('u_hide');
    })

    document.querySelector('#app-1_button').addEventListener('click', toggleApp1);
    document.querySelector('#app-1_close').addEventListener('click', toggleApp1);

    document.querySelector('#app-2_button').addEventListener('click', toggleApp2);
    document.querySelector('#app-2_close').addEventListener('click', toggleApp2);
  };

  const toggleApp1 = (even) => {
    if (document.querySelector('#app-1_container').className === 'u_hide') {
      document.querySelector('#app-1_container').classList.remove('u_hide');
      document.querySelector('#app-1_container').classList.add('rotateIn');
    } else {
      document.querySelector('#app-1_container').classList.remove('rotateIn');
      document.querySelector('#app-1_container').classList.add('rotateOut');

      setTimeout(() => {
        document.querySelector('#app-1_container').classList.remove('rotateOut');
        document.querySelector('#app-1_container').classList.add('u_hide');
      }, 2000);
    }

    toggleAppButtons();
  };

  const toggleApp2 = () => {
    if (document.querySelector('#app-2_container').className === 'u_hide') {
      document.querySelector('#app-2_container').classList.remove('u_hide');
      document.querySelector('#app-2_container').classList.add('rotateIn');
    } else {
      document.querySelector('#app-2_container').classList.remove('rotateIn');
      document.querySelector('#app-2_container').classList.add('rotateOut');

      setTimeout(() => {
        document.querySelector('#app-2_container').classList.remove('rotateOut');
        document.querySelector('#app-2_container').classList.add('u_hide');
      }, 2000);
    }

    toggleAppButtons();
  };

  const toggleAppButtons = () => {
    if (document.querySelector('#app-1_button').style.display === 'none') {
      document.querySelector('#app-1_button').style.display = 'inline-block';
      document.querySelector('#app-2_button').style.display = 'inline-block';
    } else {
      document.querySelector('#app-1_button').style.display = 'none';
      document.querySelector('#app-2_button').style.display = 'none';
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