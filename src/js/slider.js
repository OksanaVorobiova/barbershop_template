export default (() => {

    const refs = {
        forwardBtn: document.querySelector('.slider-button'),
        slideshowEl: document.querySelector('.slideshow'),
    }
    
    const { forwardBtn, slideshowEl } = refs;
    
    forwardBtn.addEventListener('click', onForwardBtnClick);

    function onForwardBtnClick(e) {
        let activeEl = document.querySelector('.active');
        let nextLI = activeEl.nextElementSibling;

        activeEl.classList.remove('active');

        nextLI ? nextLI.classList.add('active') : makeFirstImgActive();
       
    }

    function makeFirstImgActive() {
        slideshowEl.lastElementChild.classList.remove('active');
        slideshowEl.firstElementChild.classList.add('active');
    }

   
});