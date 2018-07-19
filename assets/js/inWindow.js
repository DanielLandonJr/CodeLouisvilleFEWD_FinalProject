export const InWindow = (() => {
  // minimum size to watch for
  const minThreshold = 0.0;
  // max size, in this case 75%
  const maxThreshold = 0.75;

  let observer;

  const createObserver = () => {
    // options for IntersectionObserver
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [minThreshold, maxThreshold]
    };

    observer = new IntersectionObserver(handleIntersect, options);

    // list of tags that i want to watch for
    observer.observe(document.querySelector('#app-1_button'));
    observer.observe(document.querySelector('#app-2_button'));
    observer.observe(document.querySelector('#myCanvas'));
    observer.observe(document.querySelector('#mainFooter'));
  };

  const handleIntersect = (entries, observer) => {
    // loping through objects to check visibility
    entries.forEach((entry) => {
      // is it showing based on threshold
      if (entry.isIntersecting) {
        // item in viewport

        // is it at least 0.75 or 75% visible
        if (entry.intersectionRatio >= maxThreshold) {
          // look to see if its the main footer_social, we want to add additional animation to a part of it
          if (entry.target.id === 'mainFooter') {
            // main footer showing so rotate in social list
            document.querySelector('#main-footer_social').classList.add('rotateIn');
            document.querySelector('#main-footer_social').classList.remove('u_hide');
          } else {
            // everything else
            entry.target.classList.add('scaleOut');
          }
        }
      } else {
        // item out viewport

        // is it at 0% out of viewport
        if (entry.intersectionRatio <= minThreshold) {
          // again check for main footer_social, extra stuff to clear
          if (entry.target.id === 'mainFooter') {
            // main footer showing so rotate in social list
            document.querySelector('#main-footer_social').classList.remove('rotateIn');
            document.querySelector('#main-footer_social').classList.add('u_hide');
          } else {
            // everything else
            entry.target.classList.remove('scaleOut');
          }
        }
      }
    });
  };

  // public
  return {
    init: () => {
      createObserver();
    }
  }
})();