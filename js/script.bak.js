var header = document.querySelector(".parallax-fade-top");

var firstParallax = document.querySelector(".parallax-00");

var secondParallax = document.querySelector(".parallax-01");

var parallaxTopShadow = document.querySelector(".parallax-top-shadow");

window.onscroll = function() {
 
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
  header.style.top = scrollPos / 2 + "px";
  header.style.opacity = 1 - scrollPos / 700;

  firstParallax.style.top = scrollPos / -3.5 + "px";

  secondParallax.style.top = scrollPos / -2.8 + "px";

  parallaxTopShadow.style.top = scrollPos / -2 + "px";
};
