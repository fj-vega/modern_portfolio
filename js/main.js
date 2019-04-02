// Select DOM items
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');


menuBtn.addEventListener('click', toggleMenu);

// The toggle function can be written in a much simpler way
function toggleMenu() {
  menuBtn.classList.toggle('close');
  menu.classList.toggle('show');
  menuNav.classList.toggle('show');
  menuBranding.classList.toggle('show');
  navItems.forEach(item => item.classList.toggle('show'));
}

// // Set initial state of menu
// let showMenu = false;


// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItems.forEach(item => item.classList.add('show'));
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItems.forEach(item => item.classList.remove('show'));
//   }
//   showMenu = !showMenu;
// }
