import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function() {
    const pricesItems = Array.from(document.querySelectorAll('.prices__plans-list-item'));

    pricesItems.forEach(item => {
        const modalOpen = item.querySelector('.prices__plans-card-regime-btn');
        const modal = item.querySelector('.prices__plans-modal');

        if (!modalOpen || !modal) return;

        const close = item.querySelector('.prices__plans-modal-close');

        modalOpen.addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.add('shown');
            disableBodyScroll(modal);
        });

        modal.addEventListener('click', function(event) {
            if (event.target === this) {
                modal.classList.remove('shown');
                enableBodyScroll(modal);
            } else {
                return;
            }
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            modal.classList.remove('shown');
            enableBodyScroll(modal);
        })
    });
}
