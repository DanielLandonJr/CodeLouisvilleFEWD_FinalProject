const http = new EasyHTTP;

$( document ).ready(function(){
  // side nav
  $(".button-collapse").sideNav({
    menuWidth: 230
  });

  // drop down menu
  $(".dropdown-button").dropdown({
    constrainWidth: false
  });

  $('#contentGoesHere').load('../modules/localization/localization.html');
});

(() => {
  const dropMenuClick = (event) => {
    console.log(event.target.innerText);
    switch(event.target.innerText) {
      case "Localization":
        $('#contentGoesHere').load('../modules/localization/localization.html');
        break;
      case "Weather Underground":
        $('#contentGoesHere').load('../modules/weatherUnderground/weather.html');
        break;
    }
  };
  
  document.querySelector('#dropdown1').addEventListener('click', dropMenuClick);
  
  document.querySelector('#dropdown2').addEventListener('click', dropMenuClick);
  
  document.querySelector('#dropdown3').addEventListener('click', dropMenuClick);
  
})();

(() => { // iife start

  // settings for particle effects in background as well as stat counter

  particlesJS('particles-js',
    
  {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#673ab7"
      },
      "shape": {
        "type": ["circle", "triangle", "star"],
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#673ab7",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    }
  }

  );

  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.left = '0px';
  // stats.domElement.style.top = '0px';
  stats.domElement.style.position = 'fixed';
  stats.domElement.style.left = '0px';
  stats.domElement.style.bottom = '1.2rem';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

})(); // iife end