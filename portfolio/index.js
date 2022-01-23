console.log('Всего: 75 баллов');
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