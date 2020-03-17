
// const navSlide = () => {
//     // grab teh menu burger and do something nice 
//     const menuButton = document.querySelector('.menu-button');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     // When you click the menu-button - it will slide the menu open
//     menuButton.addEventListener('click',()=>{
//         nav.classList.toggle('nav-active');
//     });
//     // animate links 
//     navLinks.forEach((link, index) => {
//         link.style.animation = `navLinkFade 0.3s ease forwards $(index / 7}s`
//         console.log(index/7);
//     });
// }

// // evoke the funciton nav slide to make it work here
// navSlide();

// Option 2
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
                link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;

            }
        });
        // Toggle the burger icon back and forth
        // burger.classList.toggle('toggle');
    });

}

navSlide();

