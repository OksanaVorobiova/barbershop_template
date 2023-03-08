const refs = {
  fixedLogo: document.querySelector('.header__logo--fixed'),
};

const { fixedLogo } = refs;

fixedLogo.addEventListener('click', scrollToTop);
//logoEls.forEach(logoEl => logoEl.addEventListener('click', scrollToTop));

function scrollToTop(e) {
  window.scroll({
    top: 100,
    behavior: 'smooth',
  });
}
