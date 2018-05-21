let Localization_UI_Ctrl = (() => {

  return {
    loadUI: () => {
      // hide the loader
      document.querySelector('#loadData').classList.add('hide');
      // show the language
      document.querySelector('#chooseLanguage').classList.remove('hide');
    },
    paintUI: (frontMatter, data, set) => {
      switch(set) {
        case 'default':
          // center default in screen and hide translation and characters
          // show those two again when a language is selected
          document.querySelector('#default').classList.remove('m4');
          document.querySelector('#default').classList.remove('m6');
          document.querySelector('#translations').style.display = 'none';
          document.querySelector('#characters').style.display = 'none';
          break;
        case 'translations':
          // put default and translation side by side
          document.querySelector('#default').classList.add('m6');
          document.querySelector('#translations').classList.add('m6');
          // show translations
          document.querySelector('#translations').style.display = 'block';
          document.querySelector('#characters').style.display = 'none';
          break;
        case 'characters':
          // put default and translation side by side
          document.querySelector('#default').classList.remove('m6');
          document.querySelector('#translations').classList.remove('m6');
          document.querySelector('#default').classList.add('m4');
          document.querySelector('#translations').classList.add('m4');
          document.querySelector('#characters').classList.add('m4');
          // show translations
          document.querySelector('#characters').style.display = 'block';
          break;
      }

      document.querySelector(`#${ set } .author`).innerText = data[0].author;
      document.querySelector(`#${ set } .language`).innerText = frontMatter[0].language;
      document.querySelector(`#${ set } .title`).innerText = data[0].title;
      document.querySelector(`#${ set } p .local1`).innerText = data[0][1];
      document.querySelector(`#${ set } p .local2`).innerText = data[0][2];
      document.querySelector(`#${ set } p .local3`).innerText = data[0][3];
      document.querySelector(`#${ set } p .local4`).innerText = data[0][4];
      document.querySelector(`#${ set } p .local5`).innerText = data[0][5];
      document.querySelector(`#${ set } p .local6`).innerText = data[0][6];
      document.querySelector(`#${ set } p .local7`).innerText = data[0][7];
      document.querySelector(`#${ set } p .local8`).innerText = data[0][8];
      document.querySelector(`#${ set } p .local9`).innerText = data[0][9];
      document.querySelector(`#${ set } p .local10`).innerText = data[0][10];
      document.querySelector(`#${ set } p .local11`).innerText = data[0][11];
      document.querySelector(`#${ set } p .local12`).innerText = data[0][12];
      document.querySelector(`#${ set } p .local13`).innerText = data[0][13];
      document.querySelector(`#${ set } p .local14`).innerText = data[0][14];
      document.querySelector(`#${ set } p .local15`).innerText = data[0][15];
      document.querySelector(`#${ set } p .local16`).innerText = data[0][16];
      document.querySelector(`#${ set } p .local17`).innerText = data[0][17];
      document.querySelector(`#${ set } p .local18`).innerText = data[0][18];
    }
  }
})();

let LocalizationApp = ((Localization_UI_Ctrl) => {
  let frontMatter = '';
  let translations = '';
  let characters = '';
  let convertedData = '';
  const http = new EasyHTTP;

  const loadEventListeners = () => {
    document.querySelector('#selectLanguage').addEventListener('change', languageChanged);
  }

  const languageChanged = (event) => {
    console.log(event.target.value);
    // convertedData array into seperate arrays
    frontMatter = convertedData.filter((item) => item.frontMatter.language === event.target.value)
    .map((item) => item.frontMatter);
    translations = convertedData.filter((item) => item.frontMatter.language === event.target.value)
      .map((item) => item.translations);
    characters = convertedData.filter((item) => item.frontMatter.language === event.target.value)
    .map((item) => item.characters);

    if (event.target.value === 'English') {
      // english selected. will reset interface
      Localization_UI_Ctrl.paintUI(frontMatter, translations, 'default');
    } else {
      Localization_UI_Ctrl.paintUI(frontMatter, translations, 'translations');

      // there are characters assoicated with the translation
      if (frontMatter[0].characters) {
        Localization_UI_Ctrl.paintUI(frontMatter, characters, 'characters');
      }
    }

  }

  const dataLoaded = (data) => {
    // convert data array into seperate arrays
    frontMatter = data.filter((item) => item.frontMatter.language === 'English')
    .map((item) => item.frontMatter);
    translations = data.filter((item) => item.frontMatter.language === 'English')
      .map((item) => item.translations);
    characters = data.filter((item) => item.frontMatter.language === 'English')
    .map((item) => item.characters);
    
    Localization_UI_Ctrl.paintUI(frontMatter, translations, 'default');

    Localization_UI_Ctrl.loadUI();
  }

  return {
    init: () => {
      loadEventListeners();

      http.get('./modules/localization/localization.json')
        .then((response) => { 
          // convert json to array
          convertedData = Object.keys(response).map((item) => { return response[item] });

          dataLoaded(convertedData);
        })
        .catch((error) => console.log(error));
    }
  }
})(Localization_UI_Ctrl);

LocalizationApp.init();