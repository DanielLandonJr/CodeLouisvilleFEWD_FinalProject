import * as pc from './polarClock.js?version=1.0.0';
import * as particles from './particleSetup.js?version=1.0.1';
import * as sm from './sideMenu.js?version=1.0.1';
import * as lang from './language_main.js?version=1.0.1';
import * as weather from './weather_main.js?version=1.0.1';
import * as inWin from './inWindow.js?version=1.0.1';

const ParallaxDesign = (() => {
  const app1_container = document.querySelector('#app-1_container');
  const app2_container = document.querySelector('#app-2_container');
  const app1_button = document.querySelector('#app-1_button');
  const app2_button = document.querySelector('#app-2_button');

  document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
  });

  const loadEventListeners = () => {
    document.querySelector('.card').addEventListener('click', () => {
      document.querySelector('.card').classList.add('u_hide');
    })

    app1_button.addEventListener('click', toggleApp1);
    app2_button.addEventListener('click', toggleApp2);
  };

  const toggleApp1 = (even) => {
    if (app1_container.className === 'u_hide') {
      app1_container.classList.remove('u_hide');
      app1_button.innerHTML = 'Hide Language Localization';
    } else {
      app1_container.classList.add('u_hide');
      app1_button.innerHTML = 'Show Language Localization';
    }
  };

  const toggleApp2 = () => {
    if (app2_container.className === 'u_hide') {
      app2_button.classList.remove('u_hide');
      document.querySelector('#app-2_button').innerHTML = 'Hide Weather Underground';
    } else {
      app2_container.classList.add('u_hide');
      app2_button.innerHTML = 'Show Weather Underground';
    }
  };

  const parallaxImage = () => {
    const imgArr = document.querySelectorAll('.pimg4 img');

    let xTemp = 0;

    imgArr.forEach(element1 => {
      element1.setAttribute("data-index", xTemp += 2);

      element1.addEventListener('mousemove', (element2) => {
        imgArr.forEach(e => {
          let divisor = parseInt(e.getAttribute("data-index"));
          let startX = e.offsetWidth;
          let startY = e.offsetHeight;

          e.style.left = (((element2.target.screenX / divisor) - element2.clientX) / 3) + 'px';
          e.style.top = (((element2.screenY / divisor) - element2.clientY) / 3) + 'px';
        });
      });
    });
  };

  // public methods
  return {
    init: () => {
      sm.SideMenu.init();

      pc.PolarClock.init(300);

      particles.ParticleSetup.init();

      lang.ApplicationLocalization.init();

      weather.WeatherUnderground.init();

      inWin.InWindow.init();

      loadEventListeners();

      // parallaxImage();
    }
  }
})();

ParallaxDesign.init();