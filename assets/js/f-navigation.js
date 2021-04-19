/**
 * Hàm đóng mở sub-menu
 * @param {*} status Trạng thái 'open', 'close'
 * @param {*} item Phần tử đứng trước sub-menu
 */
function openCloseSubMenu(status, item) {
  if (status === 'open') {
    item.nextElementSibling.style.display = 'block';
    item.classList.add('active');
  } else if ('close') {
    item.nextElementSibling.style.display = null;
    item.classList.remove('active');
  }
}

/**
 *
 * @param {*} navbar
 * @param {*} menuLinks
 */
function fNavbar(navbar, menuLinks) {
  navbar.classList.toggle('active');
  menuLinks.forEach((item) => {
    if (item.nextElementSibling !== null) {
      openCloseSubMenu('close', item);
    }
  });
}
