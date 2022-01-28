console.log('Всего: 75 баллов');

import i18Obj from './translate.js';

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
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});

portfolioSummerBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});

portfolioSpringBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});

portfolioAutumnBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
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