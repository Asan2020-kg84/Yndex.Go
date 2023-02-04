let navMain = document.querySelector('.header__menu');
let navToggle = document.querySelector('.header__toggle');
let mainBlock = document.querySelector('.main');

navMain.classList.remove('header__menu--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__menu--closed')) {
    navMain.classList.remove('header__menu--closed');
    navMain.classList.add('header__menu--opened');
  } else {
    navMain.classList.add('header__menu--closed');
    navMain.classList.remove('header__menu--opened');
  }
});

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__menu--opened')) {
    mainBlock.classList.add('mainopen');
  } else {
    mainBlock.classList.remove('mainopen');
  }
});