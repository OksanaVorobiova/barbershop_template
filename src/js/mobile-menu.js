export default (() => {

    const refs = {
        openBtnArray: document.querySelectorAll('.js-open-menu'),
        closeBtn: document.querySelector('.menu__close'),
        menuEl: document.querySelector('.menu'),
    }

    const { openBtnArray, closeBtn, menuEl } = refs;

    openBtnArray.forEach(openBtn => openBtn.addEventListener('click', onOpenBtnClick));


    function onOpenBtnClick(e) {
        e.preventDefault();
        
        if (!menuEl.classList.contains('is-open')) {
            menuEl.classList.add('is-open');
        }

        document.body.style.overflow = 'hidden';
    
        openBtnArray.forEach(openBtn => openBtn.removeEventListener('click', onOpenBtnClick));
        menuEl.addEventListener('click', onCloseBtnClick);
    }

    function onCloseBtnClick(e) {
        
        if (e.target.classList.contains('.menu__close')) {
            e.currentTarget.classList.remove('is-open');
            document.body.style.overflow = 'visible';
        }

        //if (menuEl.classList.contains('is-open')) {
         //   menuEl.classList.remove('is-open');
       // }

        //document.body.style.overflow = 'visible';

        e.currentTarget.removeEventListener('click', onCloseBtnClick);
        openBtnArray.forEach(openBtn => openBtn.addEventListener('click', onOpenBtnClick));
    
    }
});
