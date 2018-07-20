export const SideMenu = (() => {
  document.querySelector('#side-menu-back').style.height = '0vh';

  const loadEventListeners = () => {
    // open or close the side menu depending on what state it is in
    document.querySelector('#menuButton').addEventListener('click', toggleSideMenu);
    document.querySelector('.close-side-menu').addEventListener('click', toggleSideMenu);
    // click event for the menu items
    document.querySelector('#side-menu_links').addEventListener('click', menuSelection);
  };

  const menuSelection = (event) => {
    let xText = String(event.target.innerHTML).toLowerCase();

    // if xText does not have old fewd site then display ..otherwise load old site
    if (!xText.includes('old fewd site')) {
      document.querySelector('#card_title').innerHTML = '';
      document.querySelector('#card_message-primary').innerHTML = '';
      document.querySelector('#card_message-secondary').innerHTML = '';

      let xStr = `you clicked: ${String(event.target.innerHTML).toUpperCase()}`;

      document.querySelector('#card_title').innerHTML = xStr;

      xStr = 'In the original Star Trek series you would see pipes sticking out of the walls in the hallways. Those pipies were labeled "GNDN" for "Goes Nowhere Does Nothing".';

      document.querySelector('#card_message-primary').innerHTML = xStr;

      xStr = 'Like this link!';

      document.querySelector('#card_message-secondary').innerHTML = xStr;

      document.querySelector('.card').classList.remove('u_hide');
    };
  };

  // const reflow = (element) => {
  //   if (element === undefined) {
  //     element = document.documentElement;
  //   }
  //   void (element.offsetHeight);
  // }

  const toggleSideMenu = () => {
    // alert('click');
    if (document.querySelector('#side-menu-back').style.height === '0vh') {
      // overlay is hidden so show it and the menu
      document.querySelector('#side-menu').style.width = '250px';
      document.querySelector('#side-menu-back').style.height = '100vh';
      document.querySelector('#side-menu-back').style.width = '100vw';

      // reflow(document.querySelector('#particles-js'));

      document.querySelector('#side-menu_close-arrow').style.left = '265px';
    } else {
      // hide overlay and menu
      document.querySelector('#side-menu').style.width = '0';
      document.querySelector('#side-menu-back').style.height = '0vh';
      document.querySelector('#side-menu-back').style.width = '0vw';
      document.querySelector('#side-menu_close-arrow').style.left = '0px';
    }
  };

  const setupStatGraphic = () => {
    let stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.querySelector('#stats-display').appendChild(stats.dom);

    let canvas = document.createElement('canvas');
    let canvasWidth = 512;
    let canvasHeight = 512;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = `calc(50% - ${canvasHeight / 2}px)`;
    canvas.style.right = `calc(50% - ${canvasWidth / 2}px)`;

    // canvas.style = `
    // position:absolute;
    // top: calc(50% - ${canvasHeight / 2}px);
    // right: calc(50% - ${canvasWidth / 2}px);
    // transition: 0.5s;
    // `;

    document.querySelector('#stats-graphic').appendChild(canvas);
    let context = canvas.getContext('2d');
    context.fillStyle = 'rgba(127,0,255,0.05)';

    function animate() {
      // more animation code
      let time = performance.now() / 1000;
      context.clearRect(0, 0, 512, 512);

      stats.begin();

      // monitored code goes here
      if (document.querySelector('#side-menu-back').style.height !== '0vh') {
        // run only if side menu is ActiveXObject, otherwise it will keep eating fps even when closed
        for (let i = 0; i < 2000; i++) {
          let x = Math.cos(time + i * 0.01) * 196 + 256;
          let y = Math.sin(time + i * 0.01234) * 196 + 256;
          context.beginPath();
          context.arc(x, y, 10, 0, Math.PI * 2, true);
          context.fill();
        }
      }

      stats.end();
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  };

  // public methods
  return {
    init: () => {
      setupStatGraphic();

      loadEventListeners();
    }
  }
})();