const refs = {
  openBtnArray: document.querySelectorAll('.js-open-menu'),
  closeBtn: document.querySelector('.menu__close'),
  menuEl: document.querySelector('.menu'),
};

const { openBtnArray, closeBtn, menuEl } = refs;

// basic event listeners
openBtnArray.forEach(openBtn =>
  openBtn.addEventListener('click', onOpenBtnClick)
);

closeBtn.addEventListener('click', onCloseBtnClick);

// handle openBtn-click
function onOpenBtnClick(e) {
  e.preventDefault();

  if (!menuEl.classList.contains('is-open')) {
    menuEl.classList.add('is-open');
  }

  document.body.style.overflow = 'hidden';

  openBtnArray.forEach(openBtn =>
    openBtn.removeEventListener('click', onOpenBtnClick)
  );

  menuEl.addEventListener('click', onCloseBtnClick);
  //document.body.addEventListener('click', closeModalByOutsideClick);
}

// handle closeBtn-click
function onCloseBtnClick(e) {
  if (e.target.classList.contains('menu__close')) {
    menuEl.classList.remove('is-open');
    document.body.style.overflow = 'visible';

    e.currentTarget.removeEventListener('click', onCloseBtnClick);

    openBtnArray.forEach(openBtn =>
      openBtn.addEventListener('click', onOpenBtnClick)
    );
  }
}

// helper

// document.body.addEventListener('click', closeModalByOutsideClick);

//function closeModalByOutsideClick(e) {
//if (e.target === e.currentTarget) {
//menuEl.classList.remove('is-open');
//document.body.style.overflow = 'visible';

//  e.currentTarget.removeEventListener('click', closeModalByOutsideClick);

// openBtnArray.forEach(openBtn =>
//   openBtn.addEventListener('click', onOpenBtnClick)
// );
// }
// }
