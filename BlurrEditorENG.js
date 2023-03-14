
var Backgoud = true
var InputBG = document.getElementById("InputMode")
var InputENG = document.getElementById("InputLangENG")

var blurr = document.getElementById("BgBlurr")

window.addEventListener('scroll', () => {

    const scrolled = document.documentElement.scrollTop;

    if (Math.ceil(scrolled) >= 300) {
        document.getElementById("BgBlurr").classList.remove('OpZero');
        document.getElementById("BgBlurr").classList.add('OpOne');
        document.getElementById("InputMode").style.display = "none"
        
    }
    if (Math.ceil(scrolled) <= 300) {
        document.getElementById("BgBlurr").classList.remove('OpOne');
        document.getElementById("BgBlurr").classList.add('OpZero');
        document.getElementById("InputMode").style.display = "block"
    }

    
});

InputBG.addEventListener("click", e => {
    if (Backgoud) {
        Backgoud = false
        var BackgoudTxt = "on"
        document.getElementById("Loading").style.display = "none"
        document.getElementById("AnimatedBackground").style.display = "none"
        document.getElementById("ImgBackgroundId").style.display = "block"
    } else {
        Backgoud = true
        var BackgoudTxt = "off"
        document.getElementById("AnimatedBackground").style.display = "block"
        document.getElementById("Loading").style.display = "block"
        document.getElementById("ImgBackgroundId").style.display = "none"
    }

    document.getElementById("LearnMore").innerHTML = "Low power mode: " + BackgoudTxt
})

InputENG.addEventListener("click", e => {
    window.location.href = "/Portfolio/index.html";
})
