const refs = {
  bookingBtn: document.querySelector('.button--booking'),
  inputName: document.querySelector('.js-input-name'),
  inputTel: document.querySelector('.js-input-tel'),
  bookingForm: document.querySelector('.footer__form'),
};

const { bookingBtn, inputName, inputTel, bookingForm } = refs;

bookingForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (inputName.value && inputTel.value) {
    console.log({ name: inputName.value, tel: inputTel.value });
  } else {
    alert('name and phone fields are required');
  }
}
