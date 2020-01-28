import Swiper from 'swiper';

export default function() {
    const newsDetailsSliders = Array.from(document.querySelectorAll('.js-news-details-slider'));

    newsDetailsSliders.forEach(slider => {
        const thumbsContainer = slider.querySelector('.news-detailed__slider-thumbs .swiper-container');
        const mainContainer = slider.querySelector('.news-detailed__slider-main .swiper-container');
        let sliderInstance = null;
        const mainOptions = {
            spaceBetween: 20,
            thumbs: {},
            slidesPerView: 'auto',
            pagination: {
                el: slider.querySelector('.news-details__slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                579: {
                    slidesPerView: 1,
                    spaceBetween: 20
                }
            }
        };
        const thumbsOptions = {
            slidesPerView: 4,
            spaceBetween: 30,
            threshold: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                prevEl: slider.querySelector('.news-detailed__slider-thumbs-arrow--prev'),
                nextEl: slider.querySelector('.news-detailed__slider-thumbs-arrow--next')
            },
            breakpoints: {
                769: {
                    slidesPerView: 4,
                    spaceBetween: 36
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 52
                }
            }
        };

        mainOptions.thumbs.swiper = new Swiper(thumbsContainer, thumbsOptions);

        var mql = window.matchMedia('(max-width: 576px)');

        function reinit() {
            if (sliderInstance) {
                sliderInstance.destroy();
                sliderInstance = null;
            }
            sliderInstance = new Swiper(mainContainer, mainOptions);
        }

        mql.addListener(reinit);

        reinit();
    });
}
