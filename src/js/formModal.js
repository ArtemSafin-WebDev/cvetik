import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import detectIt from 'detect-it';


export default function() {
    const formModalBtns = Array.from(document.querySelectorAll('.js-form-modal'));
    const formModal = document.querySelector('.form-modal');
    const formModalClose = document.querySelector('.form-modal__close');

    const scrollLockOptions = {
        reserveScrollBarGap: true
    }

    formModalBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            // event.preventDefault();
            formModal.classList.add('shown');
            if (window.matchMedia("(min-width: 769px)").matches && !detectIt.hasTouch) return;
            disableBodyScroll(formModal, scrollLockOptions);
        })
    });


    formModal.addEventListener('click', function(event) {
        if (event.target === this) {
            formModal.classList.remove('shown');
            enableBodyScroll(formModal);
        }
    })

    formModalClose.addEventListener('click', function(event) {
        event.preventDefault();
        formModal.classList.remove('shown');
        enableBodyScroll(formModal);
    })
    
}