import * as pc from './polarClock.js?version=1.0.0';
import * as sm from './sideMenu.js?version=1.0.1';
import * as lang from './language_main.js?version=1.0.1';
import * as weather from './weather_main.js?version=1.0.1';
import * as inWin from './inWindow.js?version=1.0.1';

const ParallaxDesign = (() => {
  const app1_container = document.querySelector('#app-1_container');
  const app2_container = document.querySelector('#app-2_container');
  const app1_button = document.querySelector('#app-1_button');
  const app1_close = document.querySelector('#app-1_close');
  const app2_button = document.querySelector('#app-2_button');
  const app2_close = document.querySelector('#app-2_close');

  document.addEventListener('DOMContentLoaded', () => {
    console.warn('JavaScript Loaded ...');
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

  // const parallaxImage = () => {
  //   const imgArr = document.querySelectorAll('.pimg4 img');

  //   let xTemp = 0;

  //   imgArr.forEach(element1 => {
  //     element1.setAttribute("data-index", xTemp += 2);

  //     element1.addEventListener('mousemove', (element2) => {
  //       imgArr.forEach(e => {
  //         let divisor = parseInt(e.getAttribute("data-index"));
  //         let startX = e.offsetWidth;
  //         let startY = e.offsetHeight;

  //         e.style.left = (((element2.target.screenX / divisor) - element2.clientX) / 3) + 'px';
  //         e.style.top = (((element2.screenY / divisor) - element2.clientY) / 3) + 'px';
  //       });
  //     });
  //   });
  // };

  // public methods
  return {
    init: () => {
      sm.SideMenu.init();

      pc.PolarClock.init(300);

      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'text/html');

      let myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors'
      };

      fetch('../../assets/includes/language.html', myInit)
        .then((response) => { return response.text(); })
        .then((text) => {
          document.querySelector('#app1_AJAX_content').innerHTML = text;
          lang.ApplicationLocalization.init();
        }).catch((error) => {
          console.error(`Fetch Error =\n`, error);
        });

      fetch('https://../../assets/includes/weather.html')
        .then((response) => { return response.text(); })
        .then((text) => {
          document.querySelector('#app2_AJAX_content').innerHTML = text;
          weather.WeatherUnderground.init();
        }).catch((error) => {
          console.error(`Fetch Error =\n`, error);
        });

      inWin.InWindow.init();

      loadEventListeners();

      // parallaxImage();
    }
  }
})();

ParallaxDesign.init();
