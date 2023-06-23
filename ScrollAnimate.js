
const AnimationDelay = 75;

if (window.location.href == 'https://niccolokadera.github.io/Portfolio/' || window.location.href == 'https://niccolokadera.github.io/Portfolio/#') {
    setTimeout(() => {
        document.getElementById('PageContentContainerId').classList.remove('PageContentContainerHidden');
        document.getElementById('PageContentContainerId').classList.add('PageContentContainerAll');
    }, 2000);
} else {
    document.getElementById('PageContentContainerId').classList.remove('PageContentContainerHidden');
    document.getElementById('PageContentContainerId').classList.add('PageContentContainerAll'); 
}


console.log(window.location.href + '<- Url')

const GenericObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        var checkElement = entry.target.classList;
        if (String(checkElement).includes('line')  || String(checkElement).includes('lineActive') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('lineActive')
                    entry.target.classList.remove('line')
                } else {
                    entry.target.classList.add('line')
                    entry.target.classList.remove('lineActive')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('WithLineContentContainer')  || String(checkElement).includes('WithLineContentContainerActive') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('WithLineContentContainerActive')
                    entry.target.classList.remove('WithLineContentContainer')
                } else {
                    entry.target.classList.add('WithLineContentContainer')
                    entry.target.classList.remove('WithLineContentContainerActive')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('Status100perc')  || String(checkElement).includes('Status100percHidden') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Status100perc')
                    entry.target.classList.remove('Status100percHidden')
                } else {
                    entry.target.classList.add('Status100percHidden')
                    entry.target.classList.remove('Status100perc')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('Status50perc')  || String(checkElement).includes('Status50percHidden') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Status50perc')
                    entry.target.classList.remove('Status50percHidden')
                } else {
                    entry.target.classList.add('Status50percHidden')
                    entry.target.classList.remove('Status50perc')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('Status75perc')  || String(checkElement).includes('Status75percHidden') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Status75perc')
                    entry.target.classList.remove('Status75percHidden')
                } else {
                    entry.target.classList.add('Status75percHidden')
                    entry.target.classList.remove('Status75perc')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('Status25perc')  || String(checkElement).includes('Status25percHidden') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('Status25perc')
                    entry.target.classList.remove('Status25percHidden')
                } else {
                    entry.target.classList.add('Status25percHidden')
                    entry.target.classList.remove('Status25perc')
                }
            }, AnimationDelay);
        }
        if (String(checkElement).includes('OpenPopUpButton')  || String(checkElement).includes('OpenPopUpButtonHidden') ) {
            setTimeout(() => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('OpenPopUpButton')
                    entry.target.classList.remove('OpenPopUpButtonHidden')
                } else {
                    entry.target.classList.add('OpenPopUpButtonHidden')
                    entry.target.classList.remove('OpenPopUpButton')
                }
            }, AnimationDelay);
        }
    });
});


const hiddenElementsBar = document.querySelectorAll('.line')
hiddenElementsBar.forEach((el) => GenericObserver.observe(el))

const hiddenPopUpButton = document.querySelectorAll('.OpenPopUpButton')
hiddenPopUpButton.forEach((el) => GenericObserver.observe(el))


const hiddenElementsWLC = document.querySelectorAll('.WithLineContentContainer')



const hiddenElementsSIC = document.querySelectorAll('.StatusIndicatorContainer')
const hiddenElementsH3 = document.querySelectorAll('h3')
const hiddenElementsP = document.querySelectorAll('p')

const H3Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        setTimeout(() => {
            if (entry.isIntersecting) {
                entry.target.classList.add('H3Active')
                entry.target.classList.remove('H3Unactive')
            } else {
                entry.target.classList.add('H3Unactive')
                entry.target.classList.remove('H3Active')
            }
        }, AnimationDelay);
    });
});

const PObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        setTimeout(() => {
            if (entry.isIntersecting) {
                entry.target.classList.add('PActive')
                entry.target.classList.remove('PUnactive')
            } else {
                entry.target.classList.add('PUnactive')
                entry.target.classList.remove('PActive')
            }
        }, AnimationDelay);
    });
});


hiddenElementsH3.forEach((el) => H3Observer.observe(el))
hiddenElementsP.forEach((el) => PObserver.observe(el))
hiddenElementsSIC.forEach((el) => H3Observer.observe(el))


const hiddenElementsSI = document.querySelectorAll('.StatusIndicator')
hiddenElementsSI.forEach((el) => GenericObserver.observe(el))

const hiddenElementsMEI = document.querySelectorAll('.MeInfo')
hiddenElementsMEI.forEach((el) => H3Observer.observe(el))



/* Pop Up */
function PopUpOpen(idName) {
    const idClose = 'Close' + idName;
    const idPopUpParent = 'PopUpParent' + idName;
    const idPopUpContainer = 'PopUpContainer' + idName;

    document.getElementById(idClose).classList.remove('ClosePopUpParentHidden');
    document.getElementById(idClose).classList.add('ClosePopUpParent');

    document.getElementById(idPopUpParent).classList.remove('PopUpParentHidden');
    document.getElementById(idPopUpParent).classList.add('PopUpParentTransition');
    setTimeout(() => {
        document.getElementById(idPopUpParent).classList.remove('PopUpParentTransition');
        document.getElementById(idPopUpParent).classList.add('PopUpParent');
    }, 1);

    document.getElementById(idPopUpContainer).classList.remove('PopUpContainerHidden');
    document.getElementById(idPopUpContainer).classList.add('PopUpContainer');

    document.body.style.overflow = "hidden";
};

function PopUpClose(idName) {
    const idClose = 'Close' + idName;
    const idPopUpParent = 'PopUpParent' + idName;
    const idPopUpContainer = 'PopUpContainer' + idName;

    document.getElementById(idClose).classList.remove('ClosePopUpParent');
    document.getElementById(idClose).classList.add('ClosePopUpParentHidden');
    
    document.getElementById(idPopUpParent).classList.remove('PopUpParent');
    document.getElementById(idPopUpParent).classList.add('PopUpParentTransition');
    setTimeout(() => {
        document.getElementById(idPopUpParent).classList.remove('PopUpParentTransition');
        document.getElementById(idPopUpParent).classList.add('PopUpParentHidden');
    }, 550);

    document.getElementById(idPopUpContainer).classList.remove('PopUpContainer');
    document.getElementById(idPopUpContainer).classList.add('PopUpContainerHidden');

    document.body.style.overflow = "visible";
};


document.getElementById('OpenWMFPdf').addEventListener("click", e => {
    PopUpOpen('WMFPdf');
});

document.getElementById('CloseWMFPdf').addEventListener("click", e => {
    PopUpClose('WMFPdf');
});

document.getElementById('PopUpParentWMFPdf').addEventListener("click", e => {
    PopUpClose('WMFPdf');
});
