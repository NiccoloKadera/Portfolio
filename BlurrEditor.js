
var blurr = document.getElementById("BgBlurr")

window.addEventListener('scroll', () => {
    
    const scrolled = window.pageYOffset;

    if (Math.ceil(scrolled) >= 300) {
        document.getElementById("BgBlurr").classList.remove('OpZero');
        document.getElementById("BgBlurr").classList.add('OpOne');
        
    }
    if (Math.ceil(scrolled) <= 300) {
        document.getElementById("BgBlurr").classList.remove('OpOne');
        document.getElementById("BgBlurr").classList.add('OpZero');
    }

    const scrolled2 =  document.body.scrollTop
    const scrolled3 = window.pageYOffset

    document.getElementById("LearnMore").innerHTML = blurr.classList
    
});
