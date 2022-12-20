"use strict";

//    Toggle Mobile Navigation
//
var navbarMenu = document.querySelector("#navigation #navbar-menu");
var hamburgerMenu = document.querySelector("#navigation .hamburger-menu");
hamburgerMenu.addEventListener('click', function () {
  navbarMenu.classList.toggle("open");
  hamburgerMenu.classList.toggle("clicked");
});

//
//    Toggle Navigation Light Mode
//

document.addEventListener('scroll', function (e) {
  var scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector('body').classList.add('scroll');
  } else {
    document.querySelector('body').classList.remove('scroll');
  }
});


  //  Toggle Image Animation on scroll


var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  });
});
var hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(function (e1) {
  return observer.observe(e1);
});