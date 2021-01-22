// Hamburger
const burger = document.querySelector('nav .hamburger');
const menu = document.querySelector('nav ul');


burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})



//About animations
function addAnimations() {
    const bigLogo = document.querySelector('main .bg2 img.logo');
    const h1 = document.querySelector('main .bg2 h1');
    const firstH2 = document.querySelector('.about:nth-of-type(1) h2')
    const secondH2 = document.querySelector('.about:nth-of-type(2) h2')
    const thirdH2 = document.querySelector('.about:nth-of-type(3) h2')
    const main = document.querySelector('main');
    const scrollHeight = window.scrollY;
    const sectionDistance = document.querySelector('header').offsetTop
    const sectionHeight = document.querySelector('header').clientHeight
    const firstDiv = document.querySelector('.about:nth-of-type(1) .card')
    const secondDiv = document.querySelector('.about:nth-of-type(2) .card')
    const thirdDiv = document.querySelector('.about:nth-of-type(3) .card')
    const heightFirstDiv = document.querySelector('.about:nth-of-type(1) .card').clientHeight
    const heightSecondDiv = document.querySelector('.about:nth-of-type(2) .card').clientHeight
    const heightThirdDiv = document.querySelector('.about:nth-of-type(3) .card').clientHeight
    const distanceFirstDiv = document.querySelector('.about:nth-of-type(1) .card').offsetTop
    const distanceSecondDiv = document.querySelector('.about:nth-of-type(2) .card').offsetTop
    const distanceThirdDiv = document.querySelector('.about:nth-of-type(3) .card').offsetTop


    if (scrollHeight > sectionDistance + sectionHeight - 150) {
        h1.classList.add('active')
    } else {
        h1.classList.remove('active')
    }


    if (scrollHeight > sectionDistance + sectionHeight - 50) {
        bigLogo.classList.add('active')
    } else {
        bigLogo.classList.remove('active')
    }


    if (scrollHeight > distanceFirstDiv + heightFirstDiv - 200) {
        firstH2.classList.add('active')
    } else {
        firstH2.classList.remove('active')
    }

    if (scrollHeight > distanceSecondDiv + heightSecondDiv - 200) {
        secondH2.classList.add('active')
    } else {
        secondH2.classList.remove('active')
    }

    if (scrollHeight > distanceThirdDiv + heightThirdDiv - 200) {
        thirdH2.classList.add('active')
    } else {
        thirdH2.classList.remove('active')
    }


    if (scrollHeight > distanceFirstDiv + heightFirstDiv - 200) {
        firstDiv.classList.add('active')
    } else {
        firstDiv.classList.remove('active')
    }

    if (scrollHeight > distanceSecondDiv + heightSecondDiv - 200) {
        secondDiv.classList.add('active')
    } else {
        secondDiv.classList.remove('active')
    }

    if (scrollHeight > distanceThirdDiv + heightThirdDiv - 200) {
        thirdDiv.classList.add('active')
    } else {
        thirdDiv.classList.remove('active')
    }

}
window.addEventListener('scroll', addAnimations)



// Menu Products

const productsLi = [...document.querySelectorAll('article ul li')];
const productsTypes = [...document.querySelectorAll('section.gallery')];
const firstLi = document.querySelector('li[data-card="first"]');
const secondLi = document.querySelector('li[data-card="second"]');
const firstSection = document.querySelector('section[data-card="first"]');
const secondSection = document.querySelector('section[data-card="second"]');
const btn = [...document.querySelectorAll('.information')];



productsLi.forEach((oneType) => {
    oneType.addEventListener('click', (e) => {
        productsLi.forEach(oneType => oneType.classList.remove('active'))
        productsTypes.forEach(oneCard => oneCard.classList.remove('active'))
        e.target.classList.add('active');
        if (firstLi.classList.contains('active')) {
            firstSection.classList.add('active')
        } else {
            firstSection.classList.remove('active')
        }

        if (secondLi.classList.contains('active')) {
            secondSection.classList.add('active')

        } else {
            secondSection.classList.remove('active')
        }
    })
})



// Product cards
//more button

btn.forEach((more) => {
    more.addEventListener('click', (e) => {
        btn.forEach((more) => {
            more.classList.remove('active');
        })
        e.target.classList.toggle('active')
        const infoCard = [...document.querySelectorAll('.gallery .box')];
        for (let i = 0; i < btn.length; i++) {

            if (btn[i].classList.contains('active')) {
                infoCard[i].classList.toggle('active')
            }

        }
    })
})



//photo change - first product
const srImages = ['img/lm1.jpg', 'img/lm2.jpg', 'img/lm3.jpg', 'img/lm4.jpg', 'img/lm5.jpg', 'img/lm6.jpg', 'img/lm7.jpg']
const dotssr = [...document.querySelectorAll('span.small-round')];
const imgsr = document.querySelector('img.small-round')
dotssr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        dotssr.forEach(oneDot => oneDot.classList.remove('active'));
        e.target.classList.add('active');
        for (let i = 0; i < srImages.length; i++) {
            if (dotssr[i].classList.contains('active')) {
                imgsr.src = srImages[i];
            }
        }
    })
})

//photo change - second product
const mrImages = ['img/ls1.jpg', 'img/ls2.jpg', 'img/ls3.jpg','img/ls4.jpg']
const dotsmr = [...document.querySelectorAll('span.medium-round')];
const imgmr = document.querySelector('img.medium-round')
dotsmr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        dotsmr.forEach(oneDot => oneDot.classList.remove('active'));
        e.target.classList.add('active');
        for (let i = 0; i < mrImages.length; i++) {
            if (dotsmr[i].classList.contains('active')) {
                imgmr.src = mrImages[i];
            }
        }
    })
})

//photo change - third product
const lrImages = ['img/ld1.jpg', 'img/ld2.jpg', 'img/ld3.jpg', 'img/ld4.jpg', 'img/ld5.jpg']
const dotslr = [...document.querySelectorAll('span.large-round')];
const imglr = document.querySelector('img.large-round')
dotslr.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        dotslr.forEach(oneDot => oneDot.classList.remove('active'));
        e.target.classList.add('active');
        for (let i = 0; i < lrImages.length; i++) {
            if (dotslr[i].classList.contains('active')) {
                imglr.src = lrImages[i];
            }
        }
    })
})



//photo change - sconce_s
const sconsImages = ['img/k1.jpg', 'img/k2.jpg', 'img/k3.jpg']
const dotsscons = [...document.querySelectorAll('span.sconce_s')];
const imgscons = document.querySelector('img.sconce_s')
dotsscons.forEach((dot) => {
    dot.addEventListener('click', (e) => {
        dotsscons.forEach(oneDot => oneDot.classList.remove('active'));
        e.target.classList.add('active');
        for (let i = 0; i < sconsImages.length; i++) {
            if (dotsscons[i].classList.contains('active')) {
                imgscons.src = sconsImages[i];
            }
        }
    })
})

//Safari
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) 
{
   document.getElementsByTagName("header")[0].className += " safari";
}