const carrouselArrows = document.querySelectorAll('.carrousel-arrow');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let currentItem = 0;
const carrouselItems = document.querySelectorAll('.carrousel__item');
const totalCarrouselItems = carrouselItems.length - 1;

SetArrowActive();
carrouselArrows.forEach(arrow => {
    const isLeft = arrow == leftArrow;
    arrow.addEventListener('click', () => {

        currentItem += isLeft ? -1 : 1;
        currentItem = Math.min(totalCarrouselItems, Math.max(0, currentItem));

        SetArrowActive();
        ScrollCarrousel();
    })
})
carrouselItems.forEach((item, indexId) => {
    item.addEventListener('click', () => {

        currentItem = indexId;
        SetArrowActive();
        ScrollCarrousel();
    })
})
function SetArrowActive() {
    if (!leftArrow.classList.contains('active') && currentItem > 0) {
        leftArrow.classList.remove('inactive');
        leftArrow.classList.add('active');
    }
    if (!leftArrow.classList.contains('inactive') && currentItem == 0) {
        leftArrow.classList.remove('active');
        leftArrow.classList.add('inactive');
    }

    if (!rightArrow.classList.contains('active') && currentItem < totalCarrouselItems) {
        rightArrow.classList.add('active');
        rightArrow.classList.remove('inactive');
    }
    if (!rightArrow.classList.contains('inactive') && currentItem == totalCarrouselItems) {
        rightArrow.classList.add('inactive');
        rightArrow.classList.remove('active');
    }
}
function ScrollCarrousel() {
    carrouselItems.forEach(item => item.classList.remove('current__item'));
    carrouselItems[currentItem].scrollIntoView({
        block: "nearest",
        inline: "center",
        behavior: "smooth"
    });
    carrouselItems[currentItem].classList.add('current__item');
}