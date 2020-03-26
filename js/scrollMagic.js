

// init controller
var controller = new ScrollMagic.Controller();

// Parallax background
// triggerhook onCenter for execution at the center of the screen
new ScrollMagic.Scene({
    triggerElement: "#statistic-report",
    triggerHook: "onEnter",
})

    //.addIndicators() // for debugging purposes
    .addTo(controller);


// slot machine function
var slotmachine = gsap.timeline();
slotmachine
    .from(".data-number p", {
        duration: 2,
        ease: "ease",
        innerText: 0,
        roundProps: "innerText",
        onUpdate: function () {
            this.targets().forEach(target => {
                const val = gsap.getProperty(target, "innerText");
                target.innerText = numberWithCommas(val);
            });
        },
    }, "<");

function numberWithCommas(n) {
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

