import Swiper from 'swiper';

export default function() {
    const sliders = Array.from(document.querySelectorAll('.js-top-slider'));

    sliders.forEach(slider => {
        const container = slider.querySelector('.swiper-container');
        let directionForward = true;

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
            },
            // effect: 'fade',
            // fadeEffect: {
            //     crossFade: true
            // },
            init: false
        };

        const swiperInstance = new Swiper(container, options);

        const videoHandler = function() {
            const slideIndex = swiperInstance.realIndex;
            const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
            const video = currentSlide.querySelector('video');

            // if (window.matchMedia("(max-width: 576px)").matches) {
            //     return;
            // }

            video.currentTime = 0;
            const onVideoEndHandler = function() {
                video.removeEventListener('ended', onVideoEndHandler);
                if (swiperInstance.realIndex !== slideIndex) {
                    return;
                } else {
                    if (slideIndex + 1 >= swiperInstance.slides.length) {
                        directionForward = false;
                    } else if (slideIndex - 1 < 0) {
                        directionForward = true;
                    }
                    if (directionForward) {
                        swiperInstance.slideNext();
                    } else {
                        swiperInstance.slidePrev();
                    }
                }
            };
            video.addEventListener('ended', onVideoEndHandler);
            video.play();
        };

        swiperInstance.on('init', videoHandler);

        swiperInstance.on('slideChange', videoHandler);

        swiperInstance.init();
    });
}
