$(document).ready(function () {
    let x = screen.width;
    let navbarToggle = document.querySelector('.navbar-toggler')
    let navbar = document.querySelector('.navbar-nav');
    let navOpen = false;

    if (x <= 768) {
        navbar.style.visibility = 'hidden';
        $(navbarToggle).click(function () {
            if (navOpen == false) {
                navOpen = true;
                navbar.style.visibility = 'visible';
                navbarToggle.innerHTML = '<img src="assets/icon-close.svg">';
                navbar.style.boxShadow = '0 14rem 15rem 15rem rgba(45, 49, 77, 0.5)';

            } else {
                navOpen = false;
                navbar.style.visibility = 'hidden';
                navbarToggle.innerHTML = '<img src="assets/icon-hamburger.svg">';
            }
        });
    } else {
        navbarToggle.style.visibility = 'visible';
    }

});