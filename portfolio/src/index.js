import { i18Obj } from '../src/utils/translate.js';
import { lightThemeTags } from '../src/utils/light-theme.js';

//theme
const themeIconSun = document.querySelector('.sun');
const themeIconMoon = document.querySelector('.moon');
let theme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : 'dark';
let lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

const switchTheme = (theme) => {
  lightThemeTags.forEach((el) => {
    let items = document.querySelectorAll(el);
    items.forEach((item) => {
      if (theme === 'dark' && item.classList.contains('light-theme')) {
        item.classList.remove('light-theme');
      } else if (theme === 'light' && !item.classList.contains('light-theme')) {
        item.classList.add('light-theme');
      }
    });
  });
};

themeIconSun.addEventListener('click', () => {
  if (themeIconSun.classList.contains('light-theme')) {
    theme = 'dark';
    switchTheme(theme);
  } else {
    theme = 'light';
    switchTheme(theme);
  }
});

themeIconMoon.addEventListener('click', () => {
  if (themeIconSun.classList.contains('light-theme')) {
    theme = 'dark';
    switchTheme('dark');
  } else {
    theme = 'light';
    switchTheme('light');
  }
});

//language
const languageSwitcher = document.querySelectorAll(
  '.header__languages .language-switcher'
);

const activateRuSwitcher = () => {
  const ruSwitcher = document.getElementsByClassName('ru')[0];
  const enSwitcher = document.getElementsByClassName('en')[0];
  if (!ruSwitcher.classList.contains('active')) {
    ruSwitcher.classList.add('active');
    enSwitcher.classList.remove('active');
  }
};

const activateEnSwitcher = () => {
  const ruSwitcher = document.getElementsByClassName('ru')[0];
  const enSwitcher = document.getElementsByClassName('en')[0];
  if (!enSwitcher.classList.contains('active')) {
    enSwitcher.classList.add('active');
    ruSwitcher.classList.remove('active');
  }
};

const activateSwitcher = () => {
  if (lang === 'en') {
    activateEnSwitcher();
  } else if (lang === 'ru') {
    activateRuSwitcher();
  }
};

const addLanguageSwitcherHandler = () => {
  document
    .querySelector('.header__languages')
    .addEventListener('click', (e) => {
      let clickedLanguage = e.target;
      if (clickedLanguage.innerText === 'RU') {
        lang = 'ru';
        activateRuSwitcher();
      } else if (clickedLanguage.innerText === 'EN') {
        lang = 'en';
        activateEnSwitcher();
      }
      getTranslate(lang);
    });
};

const getTranslate = (lang) => {
  document.querySelectorAll('[data-i18]').forEach((e) => {
    if (e.placeholder) {
      e.placeholder = i18Obj[`${lang}`][e.dataset.i18];
      e.textContent = '';
    }
    e.textContent = i18Obj[`${lang}`][e.dataset.i18];
  });
};

const changeLanguageClassActive = () => {
  [].forEach.call(languageSwitcher, (el) => {
    if (el !== this) el.classList.remove('active');
  });
};

[].forEach.call(languageSwitcher, (el) => {
  el.addEventListener('click', changeLanguageClassActive, false);
});

//local storage
const setLocalStorage = () => {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
};

const getLocalStorage = () => {
  if (localStorage.getItem('lang')) {
    getTranslate(localStorage.getItem('lang'));
  }
  if (localStorage.getItem('theme')) {
    switchTheme(localStorage.getItem('theme'));
  }
  activateSwitcher();
};

window.addEventListener('beforeunload', setLocalStorage);

window.addEventListener('load', () => {
  getLocalStorage();
  addLanguageSwitcherHandler();
});

//hamburger
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
};

hamburger.addEventListener('click', toggleMenu);

const closeMenu = (event) => {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open');
    navList.classList.remove('open');
  }
};

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// portfolio
const portfolioBtn = document.querySelectorAll('.portfolio__buttons > button');
const portfolioWinterBtn = document.querySelector(
  '.portfolio__buttons .winter_button'
);
const portfolioSummerBtn = document.querySelector(
  '.portfolio__buttons .summer_button'
);
const portfolioSpringBtn = document.querySelector(
  '.portfolio__buttons .spring_button'
);
const portfolioAutumnBtn = document.querySelector(
  '.portfolio__buttons .autumn_button'
);
const portfolioImages = document.querySelectorAll('.portfolio__foto');

const switchActiveSeasonBtn = (style) => {
  portfolioBtn.forEach((btn) => {
    if (btn.classList.contains(style)) {
      if (!btn.classList.contains('active')) {
        btn.classList.add('active');
      }
    } else {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      }
    }
  });
};

portfolioWinterBtn.addEventListener('click', () => {
  switchActiveSeasonBtn('winter_button');
  portfolioImages.forEach(
    (img, index) =>
      (img.style.backgroundImage = `url(assets/img/winter/${index + 1}.jpg)`)
  );
});

portfolioSummerBtn.addEventListener('click', () => {
  switchActiveSeasonBtn('summer_button');
  portfolioImages.forEach(
    (img, index) =>
      (img.style.backgroundImage = `url(assets/img/summer/${index + 1}.jpg)`)
  );
});

portfolioSpringBtn.addEventListener('click', () => {
  switchActiveSeasonBtn('spring_button');
  portfolioImages.forEach(
    (img, index) =>
      (img.style.backgroundImage = `url(assets/img/spring/${index + 1}.jpg)`)
  );
});

portfolioAutumnBtn.addEventListener('click', () => {
  switchActiveSeasonBtn('autumn_button');
  portfolioImages.forEach(
    (img, index) =>
      (img.style.backgroundImage = `url(assets/img/autumn/${index + 1}.jpg)`)
  );
});
