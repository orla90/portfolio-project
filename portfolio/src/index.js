import { i18Obj } from '../src/utils/translate.js';
import { lightThemeTags } from '../src/utils/light-theme.js';

/* handle theme switch */
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

/* handle language switch */
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

/* handle local storage */
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

/* handle hamburger menu */
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

/* handle portfolio photos */
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

/* handle video */
const videoBlock = document.getElementsByClassName('video__player')[0];
const video = document.getElementsByClassName('video__video')[0];
const videoBtn = videoBlock.getElementsByClassName('video__button')[0];
const videoPoster = videoBlock.getElementsByClassName('video__foto')[0];
const toggle = videoBlock.getElementsByClassName('toggle')[0];
const volume = videoBlock.getElementsByClassName('volume')[0];
const progressInput = videoBlock.getElementsByClassName(
  'video__slider_progress'
)[0];
const volumeInput = videoBlock.getElementsByClassName(
  'video__slider_volume'
)[0];
let tempVolume;

const togglePlay = () => {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

const handleBigPlayBtn = () => {
  if (video.paused && videoBtn.classList.contains('video__button_hidden')) {
    videoBtn.classList.remove('video__button_hidden');
  } else if (
    !video.paused &&
    !videoBtn.classList.contains('video__button_hidden')
  ) {
    videoBtn.classList.add('video__button_hidden');
  }
};

const handleSmallPlayBtn = () => {
  if (
    !video.paused &&
    toggle.classList.contains('video__player-icon_play') &&
    !toggle.classList.contains('video__player-icon_paused')
  ) {
    toggle.classList.remove('video__player-icon_play');
    toggle.classList.add('video__player-icon_pause');
  } else if (
    video.paused &&
    !toggle.classList.contains('video__player-icon_play') &&
    !toggle.classList.contains('video__player-icon_paused')
  ) {
    toggle.classList.remove('video__player-icon_pause');
    toggle.classList.add('video__player-icon_play');
  }
};

const handleVolumeBtn = () => {
  if (
    volume.classList.contains('video__player-icon_volume') &&
    !volume.classList.contains('video__player-icon_mute')
  ) {
    tempVolume = video.volume;
    video.volume = 0;
    volumeInput.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${video.volume}%, #b3b3b3 ${video.volume}%, #b3b3b3 100%)`;
    mute();
  } else if (
    !volume.classList.contains('video__player-icon_volume') &&
    volume.classList.contains('video__player-icon_mute')
  ) {
    video.volume = tempVolume;
    unmute();
  }
};

const unmute = () => {
  volume.classList.remove('video__player-icon_mute');
  volume.classList.add('video__player-icon_volume');
};

const mute = () => {
  volume.classList.remove('video__player-icon_volume');
  volume.classList.add('video__player-icon_mute');
};

const handlePlayBtns = () => {
  togglePlay();
  handleBigPlayBtn();
  handleSmallPlayBtn();
};

videoBtn.addEventListener('click', () => {
  if (!videoPoster.classList.contains('video__foto_hidden')) {
    videoPoster.classList.add('video__foto_hidden');
  }
  handlePlayBtns();
  setVolume();
});

video.addEventListener('click', () => {
  handlePlayBtns();
});

toggle.addEventListener('click', () => {
  handlePlayBtns();
});

volume.addEventListener('click', () => {
  handleVolumeBtn();
});

const scrubVideoDuration = (e) => {
  const scrubTime = (e.offsetX / progressInput.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

const handleProgress = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressInput.value = `${percent}`;
  progressInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${
    percent + 1
  }%, #b3b3b3 ${percent + 1}%, #b3b3b3 100%)`;
};

const handleVolume = () => {
  const soundIntencityProcent = video.volume * 100;
  if (soundIntencityProcent === 0) {
    mute();
  } else {
    unmute();
  }
  volumeInput.value = `${soundIntencityProcent}`;
  volumeInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${soundIntencityProcent}%, #b3b3b3 ${soundIntencityProcent}%, #b3b3b3 100%)`;
};

const setVolume = () => {
  const defaultVolume = 0.4;
  video.volume = defaultVolume;
  volumeInput.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${
    defaultVolume * 100
  }%, #b3b3b3 ${defaultVolume * 100}%, #b3b3b3 100%)`;
};

video.addEventListener('timeupdate', handleProgress);

video.addEventListener('volumechange', handleVolume);

progressInput.addEventListener('click', scrubVideoDuration);

progressInput.addEventListener('input', function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #b3b3b3 ${value}%, #b3b3b3 100%)`;
});

volumeInput.addEventListener('input', function () {
  const valuePercent = this.value;
  video.volume = valuePercent / 100;
  this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${valuePercent}%, #b3b3b3 ${valuePercent}%, #b3b3b3 100%)`;
});
