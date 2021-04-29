var navbar = document.querySelector('.navbar');
var menuBars = document.getElementById('menu-bars');
var menuLinks = document.querySelectorAll('.navbar__menu-link');
var subMenu = document.querySelectorAll('.navbar .sub-menu');

menuBars.addEventListener('click', () => {
  fNavbar(navbar, menuLinks);
});

menuLinks.forEach((item) => {
  var viewWidth = document.getElementById('main').clientWidth;

  if (viewWidth < 1024) {
    item.addEventListener('click', () => {
      if (item.nextElementSibling !== null) {
        if (item.nextElementSibling.style.display == '')
          openCloseSubMenu('open', item);
        else openCloseSubMenu('close', item);
      } else {
        if (viewWidth < 740) {
          if (navbar.classList.contains('active')) fNavbar(navbar, menuLinks);
        } else fNavbar(navbar, menuLinks);
      }
    });
  }
});

window.addEventListener('scroll', () => {
  var header = document.getElementById('header');

  if (window.pageYOffset > 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});