document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    var navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('open');
        navbar.classList.toggle('open');
    });
});
