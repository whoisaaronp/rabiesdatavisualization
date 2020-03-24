$(document).ready(function () {

    // init controller
    var controller = new ScrollMagic.Controller();
    
    var slotmachine = gsap.timeline();
    slotmachine
        .from(".data-number p", {
            duration: 2,
            ease: "none",
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

});
