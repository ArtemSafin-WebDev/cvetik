import polyfills from './polyfills';
import detectTouch from './detectTouch';
import ourGroups from './ourGroupsSlider';
import topSliders from './topSlider';
import burgerMenu from './burgerMenu';
import maps from './map';
import formValidation from './formValidation';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    ourGroups();
    topSliders();
    burgerMenu();
    maps();
    formValidation();
});
