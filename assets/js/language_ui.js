export const UI = (() => {
  let languages = document.querySelector('#languages')
  let defaultLanguage = document.querySelector('#default');
  let translations = document.querySelector('#translations');
  let characters = document.querySelector('#characters');

  let loadData = document.querySelector('#loadData');
  let chooseLanguage = document.querySelector('#chooseLanguage');

  // public methods
  return {
    loadUI: () => {
      loadData.classList.add('u_hide');
      chooseLanguage.classList.remove('u_hide');
      languages.classList.remove('u_hide');
    },
    paintUI: (frontMatter, data, set) => {
      // hide all langauges
      defaultLanguage.classList.add('u_hide');
      translations.classList.add('u_hide');
      characters.classList.add('u_hide');

      switch (set) {
        case 'default':
          // center default in screen and hide translation and characters
          defaultLanguage.classList.remove('u_hide');
          break;
        case 'translations':
          defaultLanguage.classList.remove('u_hide');
          translations.classList.remove('u_hide');
          break;
        case 'characters':
          // put default and translation side by side
          defaultLanguage.classList.remove('u_hide');
          translations.classList.remove('u_hide');
          characters.classList.remove('u_hide');
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
    },
    generateUI: (htmlHook) => {
      document.querySelector(htmlHook).innerHTML = `
        <div id='content' data-test='javascript generated'>
          <section id='loadData'>
            <h1>Loading</h1>
            <span class='loadSpinner'></span>
          </section>

          <section id='chooseLanguage' class='u_hide'>
            <label for='selectLanguage'>Translation by Google</label>
            <select id='selectLanguage'>
              <option value='' selected disabled>Choose Language</option>
              <option value='English'>English</option>
              <option value='Chinese'>Chinese (Simplified)</option>
              <option value='Japanese'>Japanese</option>
              <option value='Latin'>Latin</option>
              <option value='Russian'>Russian</option>
              <option value='Gaelic'>Scots Gaelic</option>
            </select>
            <br>
            <span>Click Button Below To Close</span>
          </section>


          <section id='languages' class='u_hide'>
            <section id='default' class='u_hide'>
              <h3>'
                <span class='title'>title</span>'</h3>
              <p>by
                <span class='author'>author</span> in
                <span class='language'>default</span>
              </p>
              <p class='firstLetter'>
                <span class='local1 firstLetter'>default 1</span>
                <br>
                <span class='local2'>default 2</span>
                <br>
                <span class='local3'>default 3</span>
                <br>
                <span class='local4'>default 4</span>
              </p>
              <p class='firstLetter'>
                <span class='local5'>default 5</span>
                <br>
                <span class='local6'>default 6</span>
                <br>
                <span class='local7'>default 7</span>
                <br>
                <span class='local8'>default 8</span>
                <br>
                <span class='local9'>default 9</span>
              </p>
              <p class='firstLetter'>
                <span class='local10'>default 10</span>
                <br>
                <span class='local11'>default 11</span>
                <br>
                <span class='local12'>default 12</span>
                <br>
                <span class='local13'>default 13</span>
                <br>
                <span class='local14'>default 14</span>
                <br>
                <span class='local15'>default 15</span>
                <br>
                <span class='local16'>default 16</span>
                <br>
                <span class='local17'>default 17</span>
                <br>
                <span class='local18'>default 18</span>
              </p>
            </section>

            <section id='translations' class='u_hide'>
              <h3>'
                <span class='title'>title</span>'</h3>
              <p>by
                <span class='author'>author</span> in
                <span class='language'>default</span>
              </p>
              <p class='firstLetter'>
                <span class='local1'>translation 1</span>
                <br>
                <span class='local2'>translation 2</span>
                <br>
                <span class='local3'>translation 3</span>
                <br>
                <span class='local4'>translation 4</span>
              </p>
              <p class='firstLetter'>
                <span class='local5'>translation 5</span>
                <br>
                <span class='local6'>translation 6</span>
                <br>
                <span class='local7'>translation 7</span>
                <br>
                <span class='local8'>translation 8</span>
                <br>
                <span class='local9'>translation 9</span>
              </p>
              <p class='firstLetter'>
                <span class='local10'>translation 10</span>
                <br>
                <span class='local11'>translation 11</span>
                <br>
                <span class='local12'>translation 12</span>
                <br>
                <span class='local13'>translation 13</span>
                <br>
                <span class='local14'>translation 14</span>
                <br>
                <span class='local15'>translation 15</span>
                <br>
                <span class='local16'>translation 16</span>
                <br>
                <span class='local17'>translation 17</span>
                <br>
                <span class='local18'>translation 18</span>
              </p>
            </section>

            <section id='characters' class='u_hide'>
              <h3>'
                <span class='title'>title</span>'</h3>
              <p>by
                <span class='author'>author</span> in
                <span class='language'>default</span>
              </p>
              <p>
                <span class='local1'>characters 1</span>
                <br>
                <span class='local2'>characters 2</span>
                <br>
                <span class='local3'>characters 3</span>
                <br>
                <span class='local4'>characters 4</span>
              </p>
              <p>
                <span class='local5'>characters 5</span>
                <br>
                <span class='local6'>characters 6</span>
                <br>
                <span class='local7'>characters 7</span>
                <br>
                <span class='local8'>characters 8</span>
                <br>
                <span class='local9'>characters 9</span>
              </p>
              <p>
                <span class='local10'>characters 10</span>
                <br>
                <span class='local11'>characters 11</span>
                <br>
                <span class='local12'>characters 12</span>
                <br>
                <span class='local13'>characters 13</span>
                <br>
                <span class='local14'>characters 14</span>
                <br>
                <span class='local15'>characters 15</span>
                <br>
                <span class='local16'>characters 16</span>
                <br>
                <span class='local17'>characters 17</span>
                <br>
                <span class='local18'>characters 18</span>
              </p>
            </section>
          </section>
        </div>
      `;
    }
  }
})();