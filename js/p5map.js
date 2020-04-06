
// // gloabl mapping cases/death suing p5 js
// console.log("p5 is working");

// // This is the intro to javascript. 
// // console.log("javascript linked up");

// var cities;

// function preload() {
//     cities = loadTable("data/worldcities.csv", "header");
//     console.log('firing');
// }

// // resize the window
// function windowResized() {

// }


// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     stroke(2);
//     fill('#F2EDE4');
//     blendMode(LIGHTEST);
//     noLoop();
//     background('#206473');

// }


// function draw() {

//     scale(1);
//     translate(-95, -10);

//     // for loop, check the rows and increment by one
//     for (var i = 0; i < cities.getRowCount(); i++) {
//         // cycling through gathering lat and long
//         var latitude = cities.getNum(i, "lat");
//         var longtitude = cities.getNum(i, "lng");
//         // pass the lan and long now
//         setXY(latitude, longtitude);
//     }

//     // this function expects lat and lng to be passed
//     function setXY(lat, lng) {
//         var x = map(lng, -180, 180, 0, width);
//         var y = map(lat, 90, -90, 0, height);
//         strokeWeight(0.25);
//         ellipse(x, y, 1, 1);
//     }
// }