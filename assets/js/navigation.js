var navbar = document.querySelector('.navbar');
var menuBars = document.getElementById('menu-bars');
var menuLinks = document.querySelectorAll('.navbar__menu-link');
var subMenu = document.querySelectorAll('.navbar .sub-menu');

menuBars.addEventListener('click', () => {
  fNavbar(navbar, menuLinks);

  console.log('Đã click');
});

menuLinks.forEach((item) => {
  var viewWidth = document.getElementById('main').clientWidth;

  if (viewWidth < 1024) {
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
  }
});
