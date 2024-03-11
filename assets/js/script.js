'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

// script.js
function toggleDarkMode() {
  const body = document.body;
  const darkModeIcon = document.getElementById('darkModeIcon');
  const toggleButton = document.querySelector('.dark-mode-btn');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    darkModeIcon.setAttribute('name', 'sunny-outline');
    applyDarkModeColors();
  } else {
    darkModeIcon.setAttribute('name', 'moon-outline');
    resetColors();
  }
}

function applyDarkModeColors() {
  document.documentElement.style.setProperty('--sky-blue-crayola', ('hsl(188, 64%, 60%)'));
  document.documentElement.style.setProperty('--raisin-black_90', ('hsla(240, 8%, 12%, 0.9)'));
  document.documentElement.style.setProperty('--raisin-black-1', ('hsl(240, 8%, 17%)'));
  document.documentElement.style.setProperty('--raisin-black-2', ('hsl(240, 8%, 12%)'));
  document.documentElement.style.setProperty('--majorelle-blue', ('hsl(241, 77%, 63%)'));
  document.documentElement.style.setProperty('--blue-ryb_80', ('hsla(241, 88%, 60%, 0.8)'));
  document.documentElement.style.setProperty('--bittersweet', ('hsl(0, 100%, 69%)'));
  document.documentElement.style.setProperty('--eerie-black', ('hsl(0, 0%, 13%)'));
  document.documentElement.style.setProperty('--ghost-white', ('hsl(230, 60%, 98%)'));
  document.documentElement.style.setProperty('--light-gray', ('hsl(0, 0%, 80%)'));
  document.documentElement.style.setProperty('--slate-gray', ('hsl(225, 8%, 48%)'));
  document.documentElement.style.setProperty('--cool-gray', ('hsl(225, 11%, 59%)'));
  document.documentElement.style.setProperty('--gainsboro', ('hsl(217, 16%, 90%)'));
  document.documentElement.style.setProperty('--mustard', ('hsl(51, 100%, 50%)'));
  document.documentElement.style.setProperty('--white', ('hsl(0, 0%, 100%)'));
  document.documentElement.style.setProperty('--black', ('hsl(0, 0%, 0%)'));
  document.documentElement.style.setProperty('--onyx', ('hsl(240, 5%, 26%)'));
  document.documentElement.style.setProperty('--jet', ('hsl(0, 0%, 21%)'));

  document.getElementById('darkModeIcon').style.color = '#FFA500';
}

function resetColors() {
  document.documentElement.style.setProperty('--sky-blue-crayola', 'hsl(188, 64%, 40%)');
  document.documentElement.style.setProperty('--raisin-black_90', 'hsla(230, 60%, 98%)');
  document.documentElement.style.setProperty('--raisin-black-1', 'hsl(230, 60%, 98%)');
  document.documentElement.style.setProperty('--raisin-black-2', 'hsl(230, 60%, 98%)');
  document.documentElement.style.setProperty('--majorelle-blue', 'hsl(240, 8%, 12%, 0.9)');
  document.documentElement.style.setProperty('--blue-ryb_80', 'hsla(241, 88%, 40%, 0.8)');
  document.documentElement.style.setProperty('--bittersweet', 'hsl(0, 100%, 39%)');
  document.documentElement.style.setProperty('--eerie-black', 'hsl(0, 0%, 90%)');
  document.documentElement.style.setProperty('--ghost-white', 'hsl(240, 8%, 17%)');
  document.documentElement.style.setProperty('--light-gray', 'hsl(0, 0%, 60%)');
  document.documentElement.style.setProperty('--slate-gray', 'hsl(225, 8%, 28%)');
  document.documentElement.style.setProperty('--cool-gray', 'hsl(230, 60%, 98%)');
  document.documentElement.style.setProperty('--gainsboro', 'hsl(230, 60%, 98%)');
  document.documentElement.style.setProperty('--mustard', 'hsl(0, 0%, 60%)');
  document.documentElement.style.setProperty('--white', 'hsl(0, 0%, 21%)');
  document.documentElement.style.setProperty('--black', 'hsl(0, 0%, 90%)');
  document.documentElement.style.setProperty('--onyx', 'hsl(240, 5%, 16%)');
  document.documentElement.style.setProperty('--jet', 'hsl(0, 0%, 15%)');

  document.getElementById('darkModeIcon').style.color = '#3498db';
  
}



