'use strict';

/* Add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/* Navbar toggle for mobile */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);


/* Active header when window scroll down to 100px */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


/* Scroll reveal */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


/* AboutUs paragraphs */

document.addEventListener('DOMContentLoaded', () => {
  const contactContents = document.querySelectorAll('.AboutUs-content');

  // Function to add reveal class to elements with a delay
  const revealElements = () => {
    contactContents.forEach((content, index) => {
      setTimeout(() => {
        content.classList.add('reveal');
      }, 400 * (index + 1));  // Adjust delay to control speed
    });
  };

  // Trigger the reveal after a delay
  setTimeout(() => {
    revealElements();
  }, 50);
});

/* Button for Contact page*/

document.getElementById('contactButton').addEventListener('click', function() {
  window.location.href = 'Contact.html';
});

function toggleHover(card) {
  if (window.innerWidth <= 991) {
    card.classList.toggle('hovered');
  }
}




