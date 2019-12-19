import Swiper from 'swiper';
import { debounce } from 'lodash';

export default function() {
    const sliders = Array.from(document.querySelectorAll('.js-our-groups-slider'));

    sliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');
        let swiperInstance = null;
        const options = {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 58,
            breakpoints: {
                1025: {
                    slidesPerView: 5,
                    spaceBetween: 30
                }
            }
        };
        
        if (!window.matchMedia(`(max-width: 576px)`).matches) {
            swiperInstance = new Swiper(container, options);
        }

        const handleResize = debounce(function() {
            console.log('Resizing');
            if (window.matchMedia(`(max-width: 576px)`).matches) {
                if (swiperInstance) {
                    swiperInstance.destroy(true, true);
                    swiperInstance = null;
                    console.log('Destroying');
                } else {
                    return;
                }     
            } else {
                if (swiperInstance) {
                    swiperInstance.destroy();
                    swiperInstance = new Swiper(container, options);
                } else {
                    swiperInstance = new Swiper(container, options);
                }
            }
        }, 500);

        window.addEventListener('resize', handleResize);
    });
}
