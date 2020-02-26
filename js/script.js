var header = document.querySelector(".parallax-fade-top");

var move = document.querySelector(".move");

var loader = document.querySelector(".loader-wrapper");


window.onload = () => {
  setTimeout( () => {
    loader.style.opacity = '0';
    document.body.classList.remove('no-scroll')
  },2600)
}

AOS.init();
window.onscroll = () => {
  var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  header.style.top = scrollPos / 2 + "px";
  header.style.opacity = 1 - scrollPos / 700;
  move.style.top = (scrollPos/-3.5)+'px';
  
};







