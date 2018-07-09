// import * as sm from '../../assets/js/sideMenu.js';

import * as pc from './polarClock.js';
import * as particles from './particleSetup.js';
import * as sm from './sideMenu.js';
import * as lang from './language_main.js';
import * as weather from './weather_main.js';

const ParallaxDesign = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
  });

  const loadEventListeners = () => {
    document.querySelector('.card').addEventListener('click', () => {
      document.querySelector('.card').classList.add('u_hide');
    })

    document.querySelector('#app-1_button').addEventListener('click', toggleApp1);
    document.querySelector('#app-2_button').addEventListener('click', toggleApp2);
  };

  const toggleApp1 = (even) => {
    if (document.querySelector('#app-1_container').className === 'u_hide') {
      document.querySelector('#app-1_container').classList.remove('u_hide');
      document.querySelector('#app-1_button').innerHTML = 'Hide Language Localization';
    } else {
      document.querySelector('#app-1_container').classList.add('u_hide');
      document.querySelector('#app-1_button').innerHTML = 'Show Language Localization';
    }
  };

  const toggleApp2 = () => {
    if (document.querySelector('#app-2_container').className === 'u_hide') {
      document.querySelector('#app-2_container').classList.remove('u_hide');
      document.querySelector('#app-2_button').innerHTML = 'Hide Weather Underground';
    } else {
      document.querySelector('#app-2_container').classList.add('u_hide');
      document.querySelector('#app-2_button').innerHTML = 'Show Weather Underground';
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

      loadEventListeners();

      // parallaxImage();
    }
  }
})();

ParallaxDesign.init();