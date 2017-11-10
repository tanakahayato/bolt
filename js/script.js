var hamburger = document.querySelector('.header__hamburger');
var button = document.querySelector('.header_button');

hamburger.addEventListener('click', function() {
  button.classList.toggle('is-active');
});