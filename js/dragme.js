// start drag on touch screen or appear after a few seconds.
// Initial plan is to read the content on the screen or have the user do what they want to do. i.e. float rabies is present when you touch the virus appear a text message stating where to drop it.


// let setup the drop zone
let = dropZone = document.querySelector("#drop-area")

let = dropText = document.querySelector(".recycleText")

// drag the rabies virus
let rabies = document.querySelectorAll("#drag-item")

//  dropzone proximity zone
const threshold = "50%"


Draggable.create(rabies, {

    // step parameters for the edges to be recognized while dragging
    bounds: document.querySelector("#container"),
    //  let's listen for when you click is executed
    onClick: function () {
        console.log("Click Me!")
    },
    // its working, great.
    onDrag: function () {
        console.log("I'm begin Dragged")
        e.default();
    },
    onDragEnd: function (e) {
        // When the drag has ended, its dropped -- open rabies.html link
        if (this.hitTest(dropZone, threshold)) {
            // dropText.innerHTML =
            //     ` <p>Yes!-${e.target.id} can.</p>`;
            // console.log("Dropped, so open the page!");
            // console.log(“Open Sesame”);
            window.open(href('file://rabies.html'), '_self');
        } else {
            console.log("Don't do anything")
            dropText.innerHTML =
                `<p>Something else happened</p>`
        }
    }
});


// function openmypage(href) {
//     var rabiesPage = document.createElement('rabiesPage')
//     // console.log(“Dropped has occured open the page.”);
//     window.open("href(rabies.html), _self");
//     onDragEnd(rabiesPage);
// } else {
// console.log("Don't do anything")
// dropText.innerHTML =
//     `<p>Something else happened</p>`
// }