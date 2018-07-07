// import * as sm from '../../assets/js/sideMenu.js';

// loading the above file is not working...it fails on the * and I am not sure why

const ParallaxDesign = (() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
  });

  const loadEventListeners = () => {
    // open or close the side menu depending on what state it is in
    document.querySelector('#menuButton').addEventListener('click', toggleSideMenu);
    document.querySelector('.close-side-menu').addEventListener('click', toggleSideMenu);
    // click event for the menu items
    document.querySelector('#side-menu_links').addEventListener('click', menuSelection);
  };

  const menuSelection = (event) => {
    let xStr = event.target.innerHTML;

    xStr += '\n\nIn the original Star Trek series you would see pipes sticking out of the walls in the hallways. Those pipies were labeled GNDN for "Goes Nowhere Does Nothing".\n\nLike this link!';

    alert(xStr);
  };

  const toggleSideMenu = () => {
    if (document.querySelector('#side-menu-back').style.height === '0vh') {
      // overlay is hidden so show it and the menu
      document.querySelector('#side-menu').style.width = '250px';
      document.querySelector('#side-menu-back').style.height = '100vh';

      document.querySelector('#side-menu_close-arrow').style.left = '265px';
    } else {
      // hide overlay and menu
      document.querySelector('#side-menu').style.width = '0';
      document.querySelector('#side-menu-back').style.height = '0vh';
      document.querySelector('#side-menu_close-arrow').style.left = '0px';
    }
  };

  const setupParticles = () => {
    particlesJS('particles-js',
      {
        "particles": {
          "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
          "color": { "value": "#673ab7" },
          "shape": { "type": ["circle", "triangle", "star"], "stroke": { "width": 0, "color": "#000000" } },
          "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
          "size": { "value": 5, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
          "line_linked": { "enable": true, "distance": 150, "color": "#673ab7", "opacity": 0.4, "width": 1 },
          "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
        }
      });
  };

  const setupStats = () => {
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '5px';
    stats.domElement.style.top = '5px';
    // must add fps to tag that will contain it
    document.querySelector('#side-menu-back').appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function () {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
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
      // sm.SideMenu.init();

      loadEventListeners();

      setupParticles();

      setupStats();

      // parallaxImage();
    }
  }
})();

ParallaxDesign.init();