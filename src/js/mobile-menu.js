export default (() => {

    const refs = {
        openBtn: document.querySelector('.js-open-menu'),
        closeBtn: document.querySelector('.menu__close'),
        menuEl: document.querySelector('.menu'),
    }

    const { openBtn, closeBtn, menuEl } = refs;

    openBtn.addEventListener('click', onOpenBtnClick);


    function onOpenBtnClick(e) {
        e.preventDefault();

        if (!menuEl.classList.contains('is-open')) {
            menuEl.classList.add('is-open');
        }

        document.body.style.overflow = 'hidden';
    
        openBtn.removeEventListener('click', onOpenBtnClick);
        closeBtn.addEventListener('click', onCloseBtnClick);
    }

    function onCloseBtnClick(e) {
        e.preventDefault();

        if (menuEl.classList.contains('is-open')) {
            menuEl.classList.remove('is-open');
        }

        document.body.style.overflow = 'visible';

        closeBtn.removeEventListener('click', onCloseBtnClick);
        openBtn.addEventListener('click', onOpenBtnClick);
    
    }
});
