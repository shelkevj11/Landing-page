
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});
