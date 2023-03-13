
var blurr = document.getElementById("BgBlurr")

window.addEventListener('scroll', () => {
    
    const scrolled = window.scrollY;

    if (Math.ceil(scrolled) >= 300) {
        document.getElementById("BgBlurr").classList.remove('OpZero');
        document.getElementById("BgBlurr").classList.add('OpOne');
        document.getElementById("BackToTop").classList.remove('BackToTopHidden');
    }
    if (Math.ceil(scrolled) <= 300) {
        document.getElementById("BgBlurr").classList.remove('OpOne');
        document.getElementById("BgBlurr").classList.add('OpZero');
        document.getElementById("BackToTop").classList.add('BackToTopHidden');
    }
    

});

var lowEnergyButton = document.querySelectorAll("[data-pulsanteRisparmio]")

lowEnergyButton.forEach(button => {
    button.addEventListener("click", e => {
        console.log("Cadss")
        document.getElementById("SplineVisual").style.display = "none";
    })
})
