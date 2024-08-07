document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});