const animateCSS = (element, animation, prefix = 'animate__') => new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
        event.stopPropagation();
        //prevent recurrence 
        //node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, {
        once: true
    });
});
const animatedBlocks = document.querySelectorAll(".animateSection")
const animatedBlocksarray = Array.from(animatedBlocks)
const options = {
    threshold: 0.5,
    rootMargin: "50px"
};
const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        let animationStyle = "";
        let blockID = "#" + entry.target.id;
        const animationlist = ["backInDown", "backInLeft", "backInRight", , "backInUp", "Back exits", "backOutDown", "backOutLeft", "backOutRight", "backOutUp", "Bouncing entrances", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "Bouncing exits", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "Fading entrances", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeInTopLeft", "fadeInTopRight", "fadeInBottomLeft", "fadeInBottomRight", "Fading exits", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "fadeOutTopLeft", "fadeOutTopRight", "fadeOutBottomRight", "fadeOutBottomLeft", "swing", "slideInDown", "slideInLeft", "slideInRight", "slideInUp", "lightSpeedInLeft"];
        if (entry.isIntersecting) {
            animationlist.forEach(item => {
                if (entry.target.classList.contains(item)) {
                    animationStyle = item;
                };
            });
            try {
                animateCSS(blockID, animationStyle);
            } catch (e) {
                console.log("Animation error: ", blockID, animationStyle);
            };
        };
    });
}, options);
animatedBlocksarray.forEach(animatedBlock => {
    observer.observe(animatedBlock);
});