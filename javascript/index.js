

const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuIcon.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
}