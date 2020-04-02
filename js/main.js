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


// Toggle will switch each content
let dot1 = document.querySelector("#dot-1");
let dot2 = document.querySelector("#dot-2");
let content = document.querySelector("#get-started");

function addContent1() {
    content.innerHTML = `<h3 style="font-family: 'Optima'">We Are Family</h3>
    <p>Rabies virus and 14 similar viruses, including <em>Australian, European, Lagos, Mokola, Duvenhage, Bokeloh, Ikoma, and Lleida bat lyssaviruses, are members of the Rhabdoviridae family</em>, genus Lyssavirus, which is derived from the Greek word lyssa, meaning <em>“madness.”</em> Rabies derives from the Sanskrit word rabhas, which means “to do violence.”1 Rabies virus and many lyssaviruses cause human encephalitis through zoonotic infection.</p>
    `
}

function addContent2() {
    content.innerHTML = `<h3 style="font-family: 'Optima'">The Spikes</h3>
    <p>The virus envelope contains glycosylated G-protein spikes that bind to cells. The matrix protein is located on the inner virus envelope, inside which the virus nucleoprotein tightly binds the viral RNA to form the nucleocapsid core.</p>
    `
}

dot1.addEventListener("click", addContent1);
dot2.addEventListener("click", addContent2);


// Greensock scrollTO
// document.querySelectorAll("#scroll1Btn").forEach((section, index) => {
//     btn.addEventListener("click", () => {
//         console.log("It's scrolling");
//         gsap.to(window, { duration: 1, scrollTo: { y: "#scrollHere" + (index + 1), offsetY: 70 } });
//         // gsap.to(window, {duration: 2, scrollTo: "#scrollHere"});
//     });
// });




$(function () {

    var wrapper = $("#scroll1Btn"),
        $hoverpointer = $(".hover-pointer"),
        $window = $(window);

    $hoverpointer.on("click", ".discover-button", function () {
        var $this = $(this),
            div = $this.attr("div"),
            topY = $(href).offset().top;

        TweenMax.to($window, 1, {
            scrollTo: {
                y: topY,
                autoKill: true
            },
            ease: Power3.easeOut
        });

        return false;
    });

});