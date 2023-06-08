const GenericObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        var checkElement = entry.target.classList;
        if (String(checkElement).includes('line')  || String(checkElement).includes('lineActive') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('lineActive')
                entry.target.classList.remove('line')
            } else {
                entry.target.classList.add('line')
                entry.target.classList.remove('lineActive')
            }
        }
        if (String(checkElement).includes('WithLineContentContainer')  || String(checkElement).includes('WithLineContentContainerActive') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('WithLineContentContainerActive')
                entry.target.classList.remove('WithLineContentContainer')
            } else {
                entry.target.classList.add('WithLineContentContainer')
                entry.target.classList.remove('WithLineContentContainerActive')
            }
        }
        if (String(checkElement).includes('Status100perc')  || String(checkElement).includes('Status100percHidden') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('Status100perc')
                entry.target.classList.remove('Status100percHidden')
            } else {
                entry.target.classList.add('Status100percHidden')
                entry.target.classList.remove('Status100perc')
            }
        }
        if (String(checkElement).includes('Status50perc')  || String(checkElement).includes('Status50percHidden') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('Status50perc')
                entry.target.classList.remove('Status50percHidden')
            } else {
                entry.target.classList.add('Status50percHidden')
                entry.target.classList.remove('Status50perc')
            }
        }
        if (String(checkElement).includes('Status75perc')  || String(checkElement).includes('Status75percHidden') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('Status75perc')
                entry.target.classList.remove('Status75percHidden')
            } else {
                entry.target.classList.add('Status75percHidden')
                entry.target.classList.remove('Status75perc')
            }
        }
        if (String(checkElement).includes('Status25perc')  || String(checkElement).includes('Status25percHidden') ) {
            if (entry.isIntersecting) {
                entry.target.classList.add('Status25perc')
                entry.target.classList.remove('Status25percHidden')
            } else {
                entry.target.classList.add('Status25percHidden')
                entry.target.classList.remove('Status25perc')
            }
        }
    });
});


const hiddenElementsBar = document.querySelectorAll('.line')
hiddenElementsBar.forEach((el) => GenericObserver.observe(el))




const hiddenElementsWLC = document.querySelectorAll('.WithLineContentContainer')



const hiddenElementsSIC = document.querySelectorAll('.StatusIndicatorContainer')
const hiddenElementsH3 = document.querySelectorAll('h3')
const hiddenElementsP = document.querySelectorAll('p')

const H3Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('H3Active')
                entry.target.classList.remove('H3Unactive')
            } else {
                entry.target.classList.add('H3Unactive')
                entry.target.classList.remove('H3Active')
            }
    });
});

hiddenElementsH3.forEach((el) => H3Observer.observe(el))
hiddenElementsP.forEach((el) => H3Observer.observe(el))
hiddenElementsSIC.forEach((el) => H3Observer.observe(el))


const hiddenElementsSI = document.querySelectorAll('.StatusIndicator')
hiddenElementsSI.forEach((el) => GenericObserver.observe(el))