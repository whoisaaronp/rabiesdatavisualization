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


// stage of infection

//onclick="toggleClass(this)"

// function toggleClass(el) {
//     var stages = document.qetElementById('stageGroups').children;
//     for (var i = 0; i < kids.length; i++) {
//         kids[i].className = "#stageOne";
//         console.log("happy!");
//     }
//     el.className = "#stageTwo";
// }


let stageOne = document.querySelector("#stageOne");
let stageTwo = document.querySelector("#stageTwo");
let stageThree = document.querySelector("#stageThree");
let stageFour = document.querySelector("#stageFour");
let stageFive = document.querySelector("#stageFive");

let stageGroups = document.querySelector("#toggle-infections");


function addStage1() {
    content.innerHTML = `<p>Stage 1</p>
    <p>An animal is bitten by a rabid animal.</p>
    `
}
function addStage2() {
    content.innerHTML = `<p>Stage 2</p>
    <p> Rabies virus from the infected saliva enters the wound.</p>
    `
}
function addStage3() {
    content.innerHTML = `<p>Stage 3</p>
    <p>Rabies virus travels through the nerves to the spinal cord and brain. This process can last approximately 3 to 12 weeks. The animal has no signs of illness during this time.</p>
    `
}
function addStage4() {
    content.innerHTML = `<p>Stage 4</p>
    <p>When it reaches the brain, the virus multiplies rapidly and passes to the salivary glands. The animal begins to show signs of the disease.</p>
    `
}
function addStage5() {
    content.innerHTML = `<p>Stage 5</p>
    <p>The infected animal usually dies within 7 days of becoming sick.</p>
    `
}

stageOne.addEventListener("click", addStage1);
stageTwo.addEventListener("click", addStage2);
stageThree.addEventListener("click", addStage3);
stageFour.addEventListener("click", addStage4);
stageFive.addEventListener("click", addStage5);
