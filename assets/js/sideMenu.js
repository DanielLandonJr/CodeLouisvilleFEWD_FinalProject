export const SideMenu = (() => {

  const sideMenuOverlay = document.querySelector('#side-menu-back');
  sideMenuOverlay.style.height = '0vh';

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
    if (sideMenuOverlay.style.height === '0vh') {
      // overlay is hidden so show it and the menu
      document.querySelector('#side-menu').style.width = '250px';
      sideMenuOverlay.style.height = '100vh';
      sideMenuOverlay.style.width = '100vw';

      // reflow(document.querySelector('#particles-js'));

      document.querySelector('#side-menu_close-arrow').style.left = '265px';
    } else {
      // hide overlay and menu
      document.querySelector('#side-menu').style.width = '0';
      sideMenuOverlay.style.height = '0vh';
      sideMenuOverlay.style.width = '0vw';
      document.querySelector('#side-menu_close-arrow').style.left = '0px';
    }
  };

  // public methods
  return {
    init: () => {
      loadEventListeners();
    }
  }
})();