const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const header_main = document.getElementById("header-main");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    header_main.classList.toggle('show');
});