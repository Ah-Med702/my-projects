let menu = document.querySelector('.toggle-menu');
let nav = document.querySelector('nav')

menu.addEventListener('click', function () {
    nav.classList.toggle('visible');
})