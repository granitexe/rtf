// navbar hamburger
const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

const menu0 = document.querySelector('#nav-bar .nav-bar .nav-list .menu0');
const menu1 = document.querySelector('#nav-bar .nav-bar .nav-list .menu1');
const menu2 = document.querySelector('#nav-bar .nav-bar .nav-list .menu2');
const menu3 = document.querySelector('#nav-bar .nav-bar .nav-list .menu3');
const menu4 = document.querySelector('#nav-bar .nav-bar .nav-list .menu4');
const menu5 = document.querySelector('#nav-bar .nav-bar .nav-list .menu5');

hamburger_icon.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})

menu0.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
menu1.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
menu2.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
menu3.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
menu4.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
menu5.addEventListener('click',() => {
  nav_list.classList.toggle('open');
  hamburger_icon.classList.toggle('active');
})
// END navbar hamburger

// Landing scroll button
var greet = function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
};
// END landing scroll button

// Smooth scrolling
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();
