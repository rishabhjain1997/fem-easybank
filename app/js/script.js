const hamburgerElement = document.querySelector('.toggle-menu')
const headerMenuElement = document.querySelector('.header--menu')
const overlayElement = document.querySelector('.overlay')
const bodyElement = document.querySelector('body')
hamburgerElement.addEventListener('click', 
    (e) => {
        if(hamburgerElement.classList.contains('toggle-menu-open'))
        {
            console.log('Close menu')
            hamburgerElement.classList.remove('toggle-menu-open')
            headerMenuElement.classList.remove('menu-open')
            overlayElement.classList.remove('menu-open')
            bodyElement.classList.remove('no-scroll')
        }
        else {
            console.log('Open menu')
            hamburgerElement.classList.add('toggle-menu-open')
            headerMenuElement.classList.add('menu-open')
            overlayElement.classList.add('menu-open')
            bodyElement.classList.add('no-scroll')
        }
    })