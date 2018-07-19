export const UI = (() => {
  // public methods
  return {
    loadUI: () => {
      document.querySelector('#loadData').classList.add('u_hide');
      document.querySelector('#chooseLanguage').classList.remove('u_hide');
      document.querySelector('#languages').classList.remove('u_hide');
    },
    paintUI: (frontMatter, data, set) => {
      // hide all langauges
      document.querySelector('#default').classList.add('u_hide');
      document.querySelector('#translations').classList.add('u_hide');
      document.querySelector('#characters').classList.add('u_hide');

      switch (set) {
        case 'default':
          // center default in screen and hide translation and characters
          document.querySelector('#default').classList.remove('u_hide');
          break;
        case 'translations':
          document.querySelector('#default').classList.remove('u_hide');
          document.querySelector('#translations').classList.remove('u_hide');
          break;
        case 'characters':
          // put default and translation side by side
          document.querySelector('#default').classList.remove('u_hide');
          document.querySelector('#translations').classList.remove('u_hide');
          document.querySelector('#characters').classList.remove('u_hide');
          break;
      }

      document.querySelector(`#${set} .author`).innerText = data[0].author;
      document.querySelector(`#${set} .language`).innerText = frontMatter[0].language;
      document.querySelector(`#${set} .title`).innerText = data[0].title;
      document.querySelector(`#${set} p .local1`).innerText = data[0][1];
      document.querySelector(`#${set} p .local2`).innerText = data[0][2];
      document.querySelector(`#${set} p .local3`).innerText = data[0][3];
      document.querySelector(`#${set} p .local4`).innerText = data[0][4];
      document.querySelector(`#${set} p .local5`).innerText = data[0][5];
      document.querySelector(`#${set} p .local6`).innerText = data[0][6];
      document.querySelector(`#${set} p .local7`).innerText = data[0][7];
      document.querySelector(`#${set} p .local8`).innerText = data[0][8];
      document.querySelector(`#${set} p .local9`).innerText = data[0][9];
      document.querySelector(`#${set} p .local10`).innerText = data[0][10];
      document.querySelector(`#${set} p .local11`).innerText = data[0][11];
      document.querySelector(`#${set} p .local12`).innerText = data[0][12];
      document.querySelector(`#${set} p .local13`).innerText = data[0][13];
      document.querySelector(`#${set} p .local14`).innerText = data[0][14];
      document.querySelector(`#${set} p .local15`).innerText = data[0][15];
      document.querySelector(`#${set} p .local16`).innerText = data[0][16];
      document.querySelector(`#${set} p .local17`).innerText = data[0][17];
      document.querySelector(`#${set} p .local18`).innerText = data[0][18];
    }
  }
})();