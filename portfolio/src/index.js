import {
    i18Obj
  } from '../src/utils/translate';

const languageSwitcher = document.querySelectorAll('.header__languages .language-switcher');

function addLanguageSwitcherHandler() {
    document.querySelector('.header__languages').addEventListener('click', (e) => {
        let clickedLanguage = e.target;
        if (clickedLanguage.innerText === 'RU') {
            lang = 'ru';
        } else if (clickedLanguage.innerText === 'EN') {
            lang = 'en'
        }
        getTranslate(lang);
    });
}

function getTranslate(lang) {
    document.querySelectorAll('[data-i18]').forEach((e) => {
        if (e.placeholder) {
            e.placeholder = i18Obj[`${lang}`][e.dataset.i18]
            e.textContent = ''
        }
        e.textContent = i18Obj[`${lang}`][e.dataset.i18]
    });
}

[].forEach.call(languageSwitcher, el => {
    el.addEventListener('click', changeLanguageClassActive, false)
})


function changeLanguageClassActive() {
    [].forEach.call(languageSwitcher, el => {
        if (el !== this) el.classList.remove('active');
    });
    this.classList.toggle('active');
}

addLanguageSwitcherHandler();

//hamburger
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        navList.classList.remove('open');
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// portfolio
const portfolioBtn = document.querySelectorAll('.portfolio__buttons > button');
const portfolioWinterBtn = document.querySelector('.portfolio__buttons .winter_button');
const portfolioSummerBtn = document.querySelector('.portfolio__buttons .summer_button');
const portfolioSpringBtn = document.querySelector('.portfolio__buttons .spring_button');
const portfolioAutumnBtn = document.querySelector('.portfolio__buttons .autumn_button');
const portfolioImages = document.querySelectorAll('.portfolio__foto');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioWinterBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `../src/assets/img/winter/${index + 1}.jpg`);
});

portfolioSummerBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `../src/assets/img/summer/${index + 1}.jpg`);
});

portfolioSpringBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `../src/assets/img/spring/${index + 1}.jpg`);
});

portfolioAutumnBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `../src/assets/img/autumn/${index + 1}.jpg`);
});

function changeClassActive() {
    [].forEach.call(portfolioBtn, el => {
        if (el !== this) el.classList.remove('active');
    });
    this.classList.toggle('active');
}

[].forEach.call(portfolioBtn, el => {
    el.addEventListener('click', changeClassActive, false)
})

function preloadImages() {
    seasons.forEach((season) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    });
}
preloadImages();


//light theme
const lightThemeTags = ['body', '.header__container', '.logo-svg', '.nav__item', '.language-switcher', 'a', '.hero__container', '.section-title', 'light_btn', 'price_btn', '.gradient-container', '.price__content', 'input', 'textarea', '::placeholder', '.contacts__container', '.section-title-contacts', '.button', '.portfolio__buttons', '.moon', '.sun', '.networks-light', '.networks-dark', '.sun-object', '.hamburger', '.hamburger__line', '.nav-list'];

const themeIconSun = document.querySelector('.sun');
const themeIconMoon = document.querySelector('.moon');

function toggleTheme() {
    lightThemeTags.forEach((el) => {
        let items = document.querySelectorAll(el);
        theme = 'light';
        items.forEach((item) => {
            item.classList.toggle('light-theme');
        })
    });
}

themeIconSun.addEventListener('click', toggleTheme);
themeIconMoon.addEventListener('click', toggleTheme);

//local storage
let lang = 'en';
let theme = 'dark';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
    localStorage.setItem('langActive', langActive);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);        
    }
    if (localStorage.getItem('theme')) {
        const theme = localStorage.getItem('theme');
        toggleTheme(theme);
    }
}
window.addEventListener('load', getLocalStorage);
