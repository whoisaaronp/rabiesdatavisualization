
// stage of infection

let stageOne = document.querySelector("#stageOne");
let stageTwo = document.querySelector("#stageTwo");
let stageThree = document.querySelector("#stageThree");
let stageFour = document.querySelector("#stageFour");
let stageFive = document.querySelector("#stageFive");

// find the content and change 
let stageGroups = document.querySelector("#toggle-infections");

// toggle the images 
let imageVar = document.querySelector('#toggle-image');


function addStage1() {
    stageGroups.innerHTML = `<p>Stage 1</p>
    <p>An animal is bitten by a rabid animal.</p>
    `
    imageVar.setAttribute('src', 'stage-1.jpg');

}
function addStage2() {
    stageGroups.innerHTML = `<p>Stage 2</p>
    <p> Rabies virus from the infected saliva enters the wound.</p>
    `
}
function addStage3() {
    stageGroups.innerHTML = `<p>Stage 3</p>
    <p>Rabies virus travels through the nerves to the spinal cord and brain. This process can last approximately 3 to 12 weeks. The animal has no signs of illness during this time.</p>
    `
}
function addStage4() {
    stageGroups.innerHTML = `<p>Stage 4</p>
    <p>When it reaches the brain, the virus multiplies rapidly and passes to the salivary glands. The animal begins to show signs of the disease.</p>
    `
}
function addStage5() {
    stageGroups.innerHTML = `<p>Stage 5</p>
    <p>The infected animal usually dies within 7 days of becoming sick.</p>
    `
}

stageOne.addEventListener("click", addStage1);
stageTwo.addEventListener("click", addStage2);
stageThree.addEventListener("click", addStage3);
stageFour.addEventListener("click", addStage4);
stageFive.addEventListener("click", addStage5);
