
var Backgoud = true
var InputBG = document.getElementById("InputMode")
var InputENG = document.getElementById("InputLangENG")
const backToTop = document.getElementById("BackToTop")

var blurr = document.getElementById("BgBlurr")

var body = document.body,
    html = document.documentElement;

var documentHeight = 0

setTimeout(function calculateHeight() {
    documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight )
}, 4000);

// Back To top sliding animation
backToTop.addEventListener("click", function(){
    backToTop.classList.add('slidingToTopAnimation')
    setTimeout(function () {
        backToTop.classList.remove('slidingToTopAnimation')
        backToTop.classList.add('BackToTopHidden')
    }, 800);
})

// Positon handler
window.addEventListener('scroll', () => {

    const scrolled = document.documentElement.scrollTop;

    if (Math.ceil(scrolled) >= 250) {
        document.getElementById("BgBlurr").classList.remove('OpZero');
        document.getElementById("BgBlurr").classList.add('OpOne');
        document.getElementById("InputMode").style.display = "none"
        backToTop.classList.remove('BackToTopHidden')
        backToTop.classList.add('BackToTopVisible')
    }
    if (Math.ceil(scrolled) <= 250) {
        document.getElementById("BgBlurr").classList.remove('OpOne');
        document.getElementById("BgBlurr").classList.add('OpZero');
        document.getElementById("InputMode").style.display = "block"
        backToTop.classList.remove('BackToTopVisible')
        backToTop.classList.add('BackToTopHidden')
    }

    if (Math.ceil(scrolled) >= (documentHeight - 1150) && documentHeight != 0) {
        backToTop.classList.add('AnimateBackToTopEnd')
    }

    if (Math.ceil(scrolled) <= (documentHeight - 1150) && documentHeight != 0) {
        backToTop.classList.remove('AnimateBackToTopEnd')
    }
});

// Background handler
function backGroundActivator() {
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
}

InputBG.addEventListener("click", e => {
    backGroundActivator()
})

InputENG.addEventListener("click", e => {
    window.location.href = "/Portfolio/index.html";
})
