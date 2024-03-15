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


/**
 * typing
 */

const services = [
  "Building Digital Products",
  "Building Brands",
  "Creating Experiences",
  "Designing Interfaces",
  "Optimizing User Experience",
  "Developing Mobile Apps",
  "Implementing Web Solutions"
];

const heroTitle = document.getElementById('typed-text');
let currentIndex = 0;
let currentText = '';
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentService = services[currentIndex];
  if (!isDeleting) {
    currentText = currentService.substring(0, letterIndex + 1);
    heroTitle.textContent = currentText;
    letterIndex++;
    if (currentText === currentService) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 10);
    }
  } else {
    currentText = currentService.substring(0, letterIndex - 1);
    heroTitle.textContent = currentText;
    letterIndex--;
    if (currentText === '') {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % services.length;
    }
    setTimeout(type, 50);
  }
}

type(); // Start typing effect




