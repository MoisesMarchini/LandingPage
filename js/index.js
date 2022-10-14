const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.nav__menu');
const navLi = document.querySelectorAll('nav ul li a');
const navToogle = document.querySelector('.nav__toogle');

window.addEventListener('scroll', () => {
    let currentId = 0;
    let currentDif = Infinity;

    sections.forEach((section, indexId) => {
        const sectionTop = section.offsetTop;
        const sectionDif = Math.abs(window.scrollY - sectionTop);

        if (sectionDif < currentDif) {
            currentId = indexId;
            currentDif = sectionDif;
        }
    })
    SetCurrentSection(currentId);
})
navToogle.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        navToogle.classList.remove('active');
        navMenu.classList.remove('active');
    }
    else {
        navToogle.classList.add('active');
        navMenu.classList.add('active');
    }
})
navLi.forEach((button) => {
    button.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToogle.classList.remove('active');
    })
})
function SetCurrentSection(id) {
    navLi.forEach((button, indexId) => {
        button.classList.remove('active');
        if (id == indexId)
            button.classList.add('active');
    })
}
