const refs = {
  asideEl: document.querySelector('.aside'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  mobileLogo: document.querySelector('.header__logo'),
  navEl: document.querySelector('.nav'),
  menuContacts: document.querySelector('.menu__contacts--wrapper'),
  headerContainer: document.querySelector('.container--header'),
  menuCloseBtn: document.querySelector('.menu__close'),
  menuEl: document.querySelector('.menu'),
};

const { asideEl, navEl, menuContacts, headerContainer, menuCloseBtn, menuEl } =
  refs;

window.addEventListener('resize', onResize);

toggleVisuallyHidden();

function onResize() {
  toggleVisuallyHidden();
}

function toggleVisuallyHidden() {
  window.matchMedia('(min-width: 768px)').matches ? tablet() : mobile();
}

function mobile() {
  asideEl.classList.add('visually-hidden');
  //menuEl.after(menuCloseBtn, navEl, menuContacts);
}

function tablet() {
  asideEl.classList.remove('visually-hidden');
  //headerContainer.prepend(navEl, menuContacts);
}
