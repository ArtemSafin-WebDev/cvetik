import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


export default function() {
    const burgerOpen = document.querySelector('.page-header__burger');
    const burgerClose = document.querySelector('.main-nav__close-btn');
    const overlay = document.querySelector('.main-nav__overlay');
    const mainNav = document.querySelector('.main-nav');

    if (!burgerOpen || !burgerClose || !overlay) {
        console.error('No burger buttons');
        return;
    }

    burgerOpen.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.add('burger-open');
        disableBodyScroll(mainNav);
    })
    burgerClose.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.remove('burger-open');
        enableBodyScroll(mainNav);
    })
    overlay.addEventListener('click', function(event) {
        event.preventDefault();
        document.body.classList.remove('burger-open');
        enableBodyScroll(mainNav);
    })
}