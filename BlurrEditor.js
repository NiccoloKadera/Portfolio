
var blurr = document.getElementById("BgBlurr")

window.addEventListener('scroll', () => {
    
    var scrolled = window.scrollY || document.documentElement.scrollTop;

    if (Math.ceil(scrolled) >= 300) {
        document.getElementById("BgBlurr").classList.remove('OpZero');
        document.getElementById("BgBlurr").classList.add('OpOne');
        
    }
    if (Math.ceil(scrolled) <= 300) {
        document.getElementById("BgBlurr").classList.remove('OpOne');
        document.getElementById("BgBlurr").classList.add('OpZero');
    }
    

});
