const header = document.querySelector('.an_navbar');
const heroSection = document.querySelector('#an_hero_section_main');

window.addEventListener('scroll', () => {
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});