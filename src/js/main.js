import polyfills from './polyfills';
import detectTouch from './detectTouch';
import ourGroups from './ourGroupsSlider';
import topSliders from './topSlider';
import burgerMenu from './burgerMenu';
import maps from './map';
import formValidation from './formValidation';
import modals from './pricesModals';
import formModal from './formModal';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    ourGroups();
    topSliders();
    burgerMenu();
    maps();
    formValidation();
    modals();
    formModal();
});


window.addEventListener('load', function() {
    document.body.classList.add('fade-in');

    const links = Array.from(document.querySelectorAll('a:not([target="_blank"]):not([href^="mailto:"]):not([href^="tel:"])'));
    let timer = null;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (timer) clearTimeout(timer);
            const newLocation = this.href;
            timer = setTimeout(function() {
                window.location = newLocation;
                console.log('Going to new location');
            }, 300);
            document.body.classList.add('fade-out');
        })
    })

    console.log(links);
})