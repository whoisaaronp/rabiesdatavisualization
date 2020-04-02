// start drag on touch screen or appear after a few seconds.
// Initial plan is to read the content on the screen or have the user do what they want to do. i.e. float rabies is present when you touch the virus appear a text message stating where to drop it.


// let setup the drop zone
let dropZone = document.querySelector("#drop-area")
let dropText = document.querySelector("#drop-area")

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
        dropZone.style.border = "solid 1px yellow";
        e.default();
    },
    onDragEnd: function (e) {
        // When the drag has ended, its dropped -- open rabies.html link
        if (this.hitTest(dropZone, threshold)) {

            window.open('rabies.html', '_self');
        } else {
            console.log("Don't do anything")
            dropText.innerHTML =
                `<p class="yellow-highlight">Quarantine Virus into this section</p>`
            dropZone.style.border = "";
        }
    }
});
