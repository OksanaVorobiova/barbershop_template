const fixedHeader = document.querySelector('.fixed-header');
const isVisible = fixedHeader.classList.contains('visible');

window.addEventListener('scroll', checkPosition);

function checkPosition(e) {
  window.pageYOffset >= 580 ? showFixedHeader() : hideFixedHeader();
}

function showFixedHeader() {
  if (!isVisible) fixedHeader.classList.add('visible');
}

function hideFixedHeader() {
  if (fixedHeader.classList.contains('visible'))
    fixedHeader.classList.remove('visible');
}
