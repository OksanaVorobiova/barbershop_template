export default (() => {

    const refs = {
        forwardBtn: document.querySelector('.slider-button'),
        slideshowEl: document.querySelector('.slideshow'),
        sliderBtnsTab: document.querySelector('.slider-btns-tab'),
    }
    
    //links 
    const { forwardBtn, slideshowEl, sliderBtnsTab, } = refs;
    
      
    // event listeners
    forwardBtn.addEventListener('click', onForwardBtnClick);
    sliderBtnsTab.addEventListener('click', onSliderBtnsTab);
    window.addEventListener('resize', hideMobileBtn);

    // responsive
    hideMobileBtn();

    function hideMobileBtn() {
        if (window.matchMedia("(min-width: 768px)").matches) {
            forwardBtn.classList.add('visually-hidden');
        } else {
            forwardBtn.classList.remove('visually-hidden');
        }
    }
    

    // mobile click handler
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

    
    // tab and desktop click handler

    function onSliderBtnsTab(e) {

        if (e.target.classList.contains('js-forward-tab')) {
            onForwardBtnClick();
        } else if (e.target.classList.contains('js-back-tab')) {
            onBackBtnClick();
        }
    }

    function onBackBtnClick() {
        let activeEl = document.querySelector('.active');
        let prevLI = activeEl.previousElementSibling;
        

        activeEl.classList.remove('active');

        prevLI ? prevLI.classList.add('active') : makeLastImgActive();
        
    }

    function makeLastImgActive() {
        slideshowEl.firstElementChild.classList.remove('active');
        slideshowEl.lastElementChild.classList.add('active');
    }

   
});