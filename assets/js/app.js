//Show Menu

const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector('#nav-toggle'),
    nav = document.querySelector('#nav-menu');

    //Validate that variables exist

    if(toggle && nav) {
        
        //We add the show-menu class to the div tag with nav__menu class
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
        });
    }
}

//Call the showmenu function
showMenu('nav-toggle', 'nav-menu');



//Remove show class on mobile menu when link is clicked
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu  = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));