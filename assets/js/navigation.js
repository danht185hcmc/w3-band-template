var navbar = document.querySelector('.navbar');
var menuBars = document.getElementById('menu-bars');
var menuLinks = document.querySelectorAll('.navbar__menu-link');
var subMenu = document.querySelectorAll('.navbar .sub-menu');

menuBars.addEventListener('click', () => {
  fNavbar(navbar, menuLinks);
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.nextElementSibling !== null) {
      if (item.nextElementSibling.style.display == '') {
        openCloseSubMenu('open', item);
      } else {
        openCloseSubMenu('close', item);
      }
    } else {
      fNavbar(navbar, menuLinks);
    }
  });
});
