const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 1.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();


//if we have muliple functions and we need to invoke them (just to apper cleaner)
// const app = ()=>{ 
//     navSlide();
//     navSlide();
//     navSlide();
//     navSlide();
//     navSlide();
// }