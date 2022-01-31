console.log('Всего: 75 баллов');

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message',
        'e-mail': 'E-mail',
        'phone': 'Phone',
        'message': 'Message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить',
        'e-mail': 'Электронная почта',
        'phone': 'Номер телефона',
        'message': 'Текст сообщения'
    }
}

const languageSwitcher = document.querySelectorAll('.header__languages .language-switcher');
console.log(languageSwitcher);

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


//light theme
const lightThemeTags = ['body', '.header__container', '.logo-svg', '.nav__item', '.language-switcher', 'a', '.hero__container', '.section-title', 'light_btn', 'price_btn', '.gradient-container', '.price__content', 'input', 'textarea', '::placeholder', '.contacts__container', '.section-title-contacts', '.button', '.portfolio__buttons', 'svg', 
];

const themeIcon = document.querySelector('.sun');

function toggleTheme() {
    lightThemeTags.forEach((el) => {
        let items = document.querySelectorAll(el);
        theme = 'light';
        items.forEach((item) => {
            item.classList.toggle('light-theme');
        })
    });
}

themeIcon.addEventListener('click', toggleTheme);

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
        toggleTheme();
    }
}
window.addEventListener('load', getLocalStorage);
