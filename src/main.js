//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function () {
  navbarMenu.classList.toggle("open");
  hamburgerMenu.classList.toggle("clicked");
});


//
//    Toggle Navigation Light Mode
//

document.addEventListener('scroll', (e) => {
  const scroll = document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.querySelector('body').classList.add('scroll');
  } else {
      document.querySelector('body').classList.remove('scroll');
  }
});


//
//    Toggle Image Animation on scroll
//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show");
      } 
      else {
          entry.target.classList.remove("show");
      }
  })
})


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1) => observer.observe(e1));




