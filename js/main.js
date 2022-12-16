//
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
      document.querySelector('body').classList.add('scroll')
  } 
  else {
      document.querySelector('body').className.remove('scroll')
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

if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== 'undefined') {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
      get: function() {
          var self = this;
          function update(fn) {
              return function(value) {
                  var classes = self.className.split(/\s+/),
                      index = classes.indexOf(value);

                  fn(classes, index, value);
                  self.className = classes.join(" ");
              }
          }

          var ret = {                    
              add: update(function(classes, index, value) {
                  ~index || classes.push(value);
              }),

              remove: update(function(classes, index) {
                  ~index && classes.splice(index, 1);
              }),

              toggle: update(function(classes, index, value) {
                  ~index ? classes.splice(index, 1) : classes.push(value);
              }),

              contains: function(value) {
                  return !!~self.className.split(/\s+/).indexOf(value);
              },

              item: function(i) {
                  return self.className.split(/\s+/)[i] || null;
              }
          };
          
          Object.defineProperty(ret, 'length', {
              get: function() {
                  return self.className.split(/\s+/).length;
              }
          });

          return ret;
      }
  });
}



