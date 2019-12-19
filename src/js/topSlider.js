import Swiper from 'swiper';

export default function() {
    const sliders = Array.from(document.querySelectorAll('.js-top-slider'));

    sliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');

        const options = {
            watchOverflow: true,
            navigation: {
                nextEl: slider.querySelector('.top-slider__button--next'),
                prevEl: slider.querySelector('.top-slider__button--prev')
            },
            pagination: {
                el: slider.querySelector('.top-slider__pagination'),
                type: 'bullets',
                clickable: true
            }
        };

        new Swiper(container, options);
    });
}
