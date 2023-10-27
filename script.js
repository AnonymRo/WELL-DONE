'use strict';

/* Add event listener on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/* Back to the top button */

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


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
  if (window.scrollY > 50) {
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

/* PDF Download */

function downloadPDF(pdfFilename) {
  const link = document.createElement('a');
  link.href = 'path/to/your/pdf/' + pdfFilename;
  link.download = pdfFilename;
  link.click();
}

/* JS for buttons */
document.addEventListener("DOMContentLoaded", function () {
  const indexButton = document.getElementById('indexButton');
  if (indexButton) {
    indexButton.addEventListener('click', function () {
      window.location.href = 'index.html';
    });
  }

  const contactButton = document.getElementById('contactButton');
  if (contactButton) {
    contactButton.addEventListener('click', function () {
      window.location.href = 'Contact.html';
    });
  }
});

/* JS for cookies */

// Define the setCookie function
function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Define the getCookie function
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });
  return value;
}

var cookiesBtnElement = document.querySelector("#cookies-btn");
var cookieSettingsLink = document.querySelector("#cookie-settings");
var closeCookieModal = document.getElementById("close-cookie-modal");
var saveCookiePreferencesBtn = document.getElementById("save-cookie-preferences");
var cookieSettingsModal = document.getElementById("cookie-settings-modal");

if (cookieSettingsLink) {
  cookieSettingsLink.addEventListener("click", () => {
    cookieSettingsModal.style.left = "0";
  });
}

if (closeCookieModal) {
  closeCookieModal.addEventListener("click", () => {
    cookieSettingsModal.style.left = "-50%";
  });

}

if (cookiesBtnElement) {
  cookiesBtnElement.addEventListener("click", () => {
    var cookiesElement = document.querySelector("#cookies");
    if (cookiesElement) {
      cookiesElement.style.display = "none";
      setCookie("cookie", true, 30);
    }
  });
}

if (cookieSettingsLink) {
  cookieSettingsLink.addEventListener("click", () => {
    cookieSettingsModal.style.display = "block";
  });
}

if (closeCookieModal) {
  closeCookieModal.addEventListener("click", () => {
    cookieSettingsModal.style.display = "none";
  });
}

if (saveCookiePreferencesBtn) {
  saveCookiePreferencesBtn.addEventListener("click", () => {
    // Process and save user's cookie preferences
    if (document.getElementById("analyticsCookies").checked) {
      setCookie("analyticsCookie", "true", 365);
    } else {
      // Remove the analytics cookie if the user disagrees
      document.cookie = "analyticsCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Close the modal
    cookieSettingsModal.style.display = "none";
  });
}

// Define the cookieMessage function
function cookieMessage() {
  var cookiesElement = document.querySelector("#cookies");

  if (cookiesElement && !getCookie("cookie")) {
    cookiesElement.style.display = "block";
  }
}

// Add an event listener for the "load" event

if (window) {
  window.addEventListener("load", cookieMessage);
}