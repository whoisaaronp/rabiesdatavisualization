// Hello
// CONSOLE LOG TEST…
console.log('FIRING CYLINDERS');

const burger = document.querySelector('.hamburger');

// // This nav slide is equal to an anonymous function
const navSlide = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle nav
    // When user clicks on the burger it will get the class of 'nav-links'
    burger.addEventListener('click', () => {
        // Run this function toggle now  of nav-active…
        burger.classList.toggle("is-active");

        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            // Run a function…with a delay of 0.3
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

            }
        });
        // Toggle the burger icon back and forth
        // burger.classList.toggle('toggle');
    });

}

navSlide();


// dot button show, hide toggle

$(document).ready(function(){
    // create a click event for the dot button to hide the first content and reveal
    $('#dot-1').on('click', function(){

        $('#get-started').toggle();
    });
    // $('#get-started').hide();
});
