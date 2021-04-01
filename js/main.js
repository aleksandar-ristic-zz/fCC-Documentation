/* *** Navbar *** */
const navbar = document.getElementById('navbar');
const navButton = document.querySelector('.navbar-button');

navButton.addEventListener('click', function () {
    navbar.classList.toggle('open');

    if (navbar.classList.contains('open')) {
        navButton.innerHTML = `<i class="fas fa-times"></i>`
    }
    else {
        navButton.innerHTML = `<i class="far fa-caret-square-right"></i>`
    }
});

/* *** Accordion *** */
const navLink = document.querySelectorAll('.nav-link');
const accordion = document.querySelectorAll('.nav-container');

navLink.forEach((link, idx )=> link.addEventListener('click', function() {
        accordion[idx].classList.toggle('open');
}));