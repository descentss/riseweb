//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
    hamburgerMenu.classList.toggle("clicked");
});


document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

// <!--
// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar
// -->

