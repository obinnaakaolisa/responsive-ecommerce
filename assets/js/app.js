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

navLink.forEach(n => n.addEventListener('click', () => {
    const navMenu  = document.querySelector('#nav-menu');
    navMenu.classList.remove('show-menu');
}));


//Scroll Sections Active Links
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {

    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });

    
    //Change background of header
    const header = document.querySelector('#header');
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
    
    
    //Show scrollTopButton
    const scrollTop = document.querySelector('#scroll-top');
    if(this.scrollY >= 260) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');

});